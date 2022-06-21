module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", { //user kecil disamping adalah pengecekan sekaligus untuk membuat database ada atau tidak
      // id: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true,
      // },
      name: {
        type: Sequelize.STRING
      }
    });
    return User;
  };