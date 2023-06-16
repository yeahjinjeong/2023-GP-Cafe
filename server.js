const express = require('express');
const app = express();
// var cors = require('cors');

const database = require('./module/db_connect.js');
const conn = database.conn();

app.listen(4000, function(){
    console.log('Connected Server, 4000 Port');
})

app.set()