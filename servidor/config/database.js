module.exports = {
development: {
    username: 'root',
    password: '123456',
    database: 'appanime',
    host: '127.0.0.1',
    dialect: 'mariadb',
    dialectOptions: {
    charset: 'utf8mb4',
    timezone: 'GMT',
    },
    define: {
    charset: 'utf8mb4',
    },
    pool: {
    max: 5,
    min: 0,
    acquire: 1000000,
    idle: 200000,
    },
    benchmark: true,
    },
};