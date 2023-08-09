const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const { PORT, CORS_ORIGIN } = process.env;
const router = express.Router();

const storiesRoutes = require('./routes/storiesRoutes.js');
const genresRoutes = require ('./routes/genresRoutes.js');

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static('public'));

//Routes
app.use('/stories', storiesRoutes);
app.use('/genres' , genresRoutes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});