require('dotenv').config();

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'storypears', 
    port: 3306,
  },
});

process.on('SIGINT', () => {
  knex.destroy(() => {
    console.log('Database connection closed.');
    process.exit(0);
  });
});

module.exports = knex;