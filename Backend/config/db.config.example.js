import mysql from "mysql2";

// Connexion à la base de données
const db = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "pwd",
    database: "spotify",
  });

  export default db;