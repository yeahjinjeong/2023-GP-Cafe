const sql = require("./db.js");

const User = function(user){
    this.username = user.username;
    this.pw = user.pw;
    this.birth = user.birth;
    this.sex = user.sex;
    this.email = user.email;
}

User.create = (newUser, result)=>{
    sql.query("INSERT INTO user_info SET ?", newUser, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Created user: ", {username: res.in})
    })
}

// findBYdatacid = ()

exports.getAll = result =>{
    sql.query('SELECT * FROM cafe_info', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("CAFE: ", res);
        result(null, res);
    });
};

exports.getClass = result =>{
    sql.query('SELECT datacid, category, score FROM CafeCategory WHERE (datacid, score) IN (SELECT datacid, MAX(score) FROM CafeCategory GROUP BY datacid)', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("CAFE: ", res);
        result(null, res);
    });
};