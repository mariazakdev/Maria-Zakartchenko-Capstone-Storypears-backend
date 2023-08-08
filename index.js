require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const { PORT, CORS_ORIGIN } = process.env;
const port = process.env.PORT || 8080;
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});