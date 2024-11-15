// Importation des modules nécessaires
const sequelize = require("./db");

async function loginNonParametric(email, password) {
  try {
    const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    const users = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });

    console.log(users)
    if (users) {
      console.log("Connexion réussie !");
    } else {
      console.log("Email ou mot de passe incorrect.");
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
  }
}

// Exemple d'utilisation

async function loginParametric(email, password) {
  try {
    const query =
      "SELECT * FROM users WHERE email = :email AND password = :password";
    const users = await sequelize.query(query, {
      replacements: { email, password },
      type: sequelize.QueryTypes.SELECT,
    });

    console.log(users)
    if (users) {
      console.log("Connexion réussie !");
    } else {
      console.log("Email ou mot de passe incorrect.");
    }
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
  }
}



loginNonParametric("1' OR '1'='1", "anything");

//loginParametric("tombihoreau@gmail.com", "tom");
//loginParametric("1' OR '1'='1", "anything");