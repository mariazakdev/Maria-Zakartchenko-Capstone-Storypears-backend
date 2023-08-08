require('dotenv').config();

console.log('Environment:', process.env.NODE_ENV);
console.log('DB_CLIENT:', process.env.DB_CLIENT);

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      charset: process.env.DB_CHARSET,
      port: process.env.DB_PORT,
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
  },
};
