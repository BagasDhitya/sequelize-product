import { Sequelize } from "sequelize";

const db = new Sequelize({
  host: "localhost",
  username: "root",
  password: "bagas371006",
  database: "sequelize_db",
  dialect: "mysql",
});

export default db;
