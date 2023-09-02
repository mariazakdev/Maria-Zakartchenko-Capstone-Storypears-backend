const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const knex = require("./db/db");
require("dotenv").config();
const { authenticateJwt } = require("./middleware/jwtMiddleware");
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const KnexSessionStore = require('connect-session-knex')(session);

const app = express();

const { PORT, CORS_ORIGIN, SESSION_SECRET } = process.env;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

const store = new KnexSessionStore({
  knex: knex, 
  tablename: 'sessions',
  createtable: true,
});

app.use(
  session({
    secret: SESSION_SECRET,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    store: store,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// Configure Passport with the Local Strategy for authentication
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
      // Authenticate user against your database
      knex("users")
        .where({ email: email })
        .first()
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: "Incorrect email or password",
            });
          }

          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              return done(err);
            }

            if (!result) {
              return done(null, false, {
                message: "Incorrect email or password",
              });
            }
            return done(null, { id: user.id, ...user });          
          });
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await knex("users").where({ id: id }).first();

    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

// Import and mount your routes
const storiesRoutes = require("./routes/storiesRoutes.js");
const genresRoutes = require("./routes/genresRoutes.js");
const usersRoutes = require("./routes/usersRoutes.js");
const promptsRoutes = require("./routes/promptsRoutes.js");
const emotionsRoutes = require("./routes/emotionsRoutes.js");
const linksRoutes = require("./routes/linksRoutes.js");
const feelingsRoutes = require("./routes/feelingsRoutes.js");
const halfStoryRoutes = require("./routes/halfStoryRoutes.js");
const storyContents = require('./routes/storyContentsRoutes.js');
const fullstoriesRoutes = require("./routes/fullstoriesRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

app.use("/stories", storiesRoutes);
app.use("/genres", genresRoutes);
app.use("/users", usersRoutes);
app.use("/prompts", promptsRoutes);
app.use("/emotions", emotionsRoutes);
app.use("/links", linksRoutes);
app.use("/feelings", feelingsRoutes);
app.use("/halfstories", halfStoryRoutes);
app.use('/storycontents', storyContents);
app.use('/fullstories', fullstoriesRoutes);

// Authentication routes
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
