const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demo', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion réussie à la base de données.');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error);
  }
})();

module.exports = sequelize;
