const express = require('express');
const bodyParser = require("body-parser")

const app = express();
// var cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message: "Hello World!"});
})

// const database = require('./module/db_connect.js');
// const conn = database.conn();

// app.get('/CafeClass', )

require("./node/routes/cafe.routes.js")(app);

app.listen(4000, function(){
    console.log('Connected Server, 4000 Port');
})

app.set()