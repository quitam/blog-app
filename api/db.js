import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Abc12345",
  database: "blog-app",
  insecureAuth: true,
});
