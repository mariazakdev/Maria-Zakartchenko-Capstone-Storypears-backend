const express = require("express");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const knex = require("./db/db");
require("dotenv").config();
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const app = express();

const { PORT, CORS_ORIGIN } = process.env;

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

// Passport
app.use(passport.initialize());

app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (email, password, done) => {
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

const genresRoutes = require("./routes/genresRoutes.js");
const usersRoutes = require("./routes/usersRoutes.js");
const promptsRoutes = require("./routes/promptsRoutes.js");
const emotionsRoutes = require("./routes/emotionsRoutes.js");
const feelingsRoutes = require("./routes/feelingsRoutes.js");
const authRoutes = require("./routes/authRoutes.js");
const storyBranchRoutes = require("./routes/storyBranchRoutes.js");
const storyTreeRoutes = require("./routes/storyTreeRoutes.js");

app.use("/genres", genresRoutes);
app.use("/users", usersRoutes);
app.use("/prompts", promptsRoutes);
app.use("/emotions", emotionsRoutes);
app.use("/feelings", feelingsRoutes);
app.use("/storybranch", storyBranchRoutes);
app.use("/storytree", storyTreeRoutes);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Internal Server Error" });
});


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
