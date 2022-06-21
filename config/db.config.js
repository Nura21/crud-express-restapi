module.exports = {
  HOST: "localhost",
  USER: "nura",
  PASSWORD: "qwerty_21#",
  DB: "test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
