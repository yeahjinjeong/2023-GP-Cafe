const db = require('mysql')

module.exports.conn = function(){
    const conn = db.createConnection({
        host : '',
        port : '3306',
        user : 'yejinaws',
        password : '',
        database : 'CafeDB'

    });
    conn.connect(function(err){
        if (err){
            console.error('에러 connect:'+ err.stack);
            return;
        }
        console.log('Mysql DB Connect 완료!');
    });
    conn.query("SELECT * FROM cafe_info", (err, result)=>{
        if (err) throw err;
        console.log(result)
    });
    return conn;
}