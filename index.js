const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { PORT, CORS_ORIGIN } = process.env;
const router = express.Router();
const expressSession = require('express-session');
const helmet = require('helmet');
const passport = require('passport');
const knex = require('knex')(require('./knexfile.js'));
const passportConfig = require('./passport');


// Middleware
app.use(
  cors({ 
    origin: CORS_ORIGIN,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  }));
app.use(express.json());
app.use(express.static('public'));
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET, 
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Import and mount your routes
const storiesRoutes = require('./routes/storiesRoutes.js');
const genresRoutes = require('./routes/genresRoutes.js');
const usersRoutes = require('./routes/usersRoutes.js');
const promptsRoutes = require('./routes/promptsRoutes.js');
const emotionsRoutes = require('./routes/emotionsRoutes.js');
const linksRoutes = require('./routes/linksRoutes.js');
const feelingsRoutes = require('./routes/feelingsRoutes.js');
const halfStoryRoutes = require('./routes/halfStoryRoutes.js');
const authRoutes = require('./routes/authRoutes.js');
const profileRoutes = require('./routes/profileRoutes.js');

app.use('/stories', storiesRoutes);
app.use('/genres', genresRoutes);
app.use('/users', usersRoutes);
app.use('/prompts', promptsRoutes);
app.use('/emotions', emotionsRoutes);
app.use('/links', linksRoutes);
app.use('/feelings', feelingsRoutes);
app.use('/halfstories', halfStoryRoutes);
// Mount authentication routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
