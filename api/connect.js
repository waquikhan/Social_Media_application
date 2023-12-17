import mysql from "mysql2"

export const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Waquikhan@1234",
    database : "social",
    insecureAuth : true
});