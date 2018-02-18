module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5431,
      user: 'sessionuser',
      password: 'sessionpassword',
      database: 'sessiondb',
    },
    migrations: {
      directory: './api/db/migrations',
    },
    seeds: {
      directory: './api/db/seeds',
    },
  },
};
