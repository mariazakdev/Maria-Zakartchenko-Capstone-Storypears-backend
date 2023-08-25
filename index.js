const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const KnexSessionStore = require("connect-session-knex")(session);
const bcrypt = require("bcrypt");
const knex = require("./db/db"); // Your database configuration
require("dotenv").config();
const { authenticateJwt } = require("./middleware/jwtMiddleware");

// Initialize Express app
const app = express();

// Load environment variables
const { PORT, CORS_ORIGIN, SESSION_SECRET } = process.env;

// Middleware setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);
// Setup session management using express-session and connect-session-knex
app.use(
  session({
    store: new KnexSessionStore({ knex }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.static("public"));
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

          // Compare password with the hashed password from the database
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
              return done(err);
            }

            if (!result) {
              return done(null, false, {
                message: "Incorrect email or password",
              });
            }

            // Authentication successful, return the user
            return done(null, user);
          });
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);

// Serialize user to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from the session
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
const authRoutes = require("./routes/authRoutes.js");
const profileRoutes = require("./routes/profileRoutes.js");

app.use("/stories", storiesRoutes);
app.use("/genres", genresRoutes);
app.use("/users", usersRoutes);
app.use("/prompts", promptsRoutes);
app.use("/emotions", emotionsRoutes);
app.use("/links", linksRoutes);
app.use("/feelings", feelingsRoutes);
app.use("/halfstories", halfStoryRoutes);
// Mount authentication routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
