import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Sequelize");
});

try {
  db.authenticate();
  console.log("Connection has established successfully");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.use(Router);

app.listen(port, () => console.log(`Server running on port ${port}`));
