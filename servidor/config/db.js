const Sequelize = require("sequelize");

const sequileze = new Sequelize("appanime", "root", "123456", {
  host: "127.0.0.1",
  dialect: "mariadb",
});

//Testeo de conexion
const test = async () => {
  try {
    await sequileze.authenticate();
    console.log("");
    console.log("Conectado a la BD");
    console.log("DB name: appanime");
    console.log("HostName: 127.0.0.1");
    console.log("");
  } catch (error) {
    console.log("Ocurrio un error al conectar a la BD");
    console.log(error);
  }
};

test();

module.exports = sequileze;
