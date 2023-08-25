const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { PORT, CORS_ORIGIN } = process.env;
const router = express.Router();
// Added
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const knex = require('./db/db'); // Your database configuration
require('./configs/passport');


// Middleware
app.use(express.static('public'));
// Enable CORS (with additional config options required for cookies)
app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
// Use cookie parser
app.use(cookieParser('secret'));
// Configure session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 86400000 1 day
    },
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
