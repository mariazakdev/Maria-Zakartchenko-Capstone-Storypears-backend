const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { PORT, CORS_ORIGIN } = process.env;
const router = express.Router();
const expressSession = require('express-session');
const helmet = require('helmet');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const knex = require('./db/db');



const storiesRoutes = require('./routes/storiesRoutes.js');
const genresRoutes = require ('./routes/genresRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const promptsRoutes = require('./routes/promptsRoutes.js');
const emotionsRoutes = require ('./routes/emotionsRoutes.js');
const linksRoutes = require('./routes/linksRoutes.js');
const feelingsRoutes = require('./routes/feelingsRoutes.js');
const halfStoryRoutes = require('./routes/halfStoryRoutes.js');
const authRoutes = require('./routes/auth');

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static('public'));
app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    (_accessToken, _refreshToken, profile, done) => {
      console.log('GitHub profile:', profile);
      knex('users')
        .select('id')
        .where({ github_id: profile.id })
        .then((user) => {
          if (user.length) {
            done(null, user[0]);
          } else {
            knex('users')
              .insert({
                github_id: profile.id,
                avatar_url: profile._json.avatar_url,
                username: profile.username,
              })
              .then((userId) => {
                done(null, { id: userId[0] });
              })
              .catch((err) => {
                console.log('Error creating a user', err);
              });
          }
        })
        .catch((err) => {
          console.log('Error fetching a user', err);
        });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('serializeUser (user object):', user);
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  console.log('deserializeUser (user id):', userId);

  knex('users')
    .where({ id: userId })
    .then((user) => {
      console.log('req.user:', user[0]);
      done(null, user[0]);
    })
    .catch((err) => {
      console.log('Error finding user', err);
    });
});


//Routes
app.use('/stories', storiesRoutes);
app.use('/genres' , genresRoutes);
app.use('/users', usersRoutes );
app.use('/prompts', promptsRoutes);
app.use ('/emotions', emotionsRoutes);
app.use('/links', linksRoutes);
app.use('/feelings', feelingsRoutes);
app.use('/halfstories', halfStoryRoutes);
app.use('/auth', authRoutes);



app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});