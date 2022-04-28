const mysql2 = require("mysql2");


//DataBase Connection
const connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "password",
    database : "user_db"
});

//Check the Connection
connection.connect((err) => {
    if(!err){
        console.log("Database Connected");
    }
    else{
        console.log(err);
    }
});

module.exports = connection;