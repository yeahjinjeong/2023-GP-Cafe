const db = require('mysql')
const dbConfig = require("../config/db.config.js");

const connection = db.createConnection({
    host: dbConfig.HOST,
    port : dbConfig.PORT,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB
});

connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected mysql")
});

module.exports = connection;

// connection.query("SELECT datacid, category, MAX(score) FROM CafeCategory GROUP BY datacid", (err, result)=>{
//     if (err) throw err;
//     console.log(result)
// });
// return conn;