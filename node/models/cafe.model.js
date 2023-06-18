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

// exports.getClass = result => {
//     sql.query('SELECT datacid, category, score FROM CafeCategory WHERE (datacid, score) IN (SELECT datacid, MAX(score) FROM CafeCategory GROUP BY datacid)', (err, res)=>{
//         if(err){
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//         const filteredResults = res.filter((row)=>{
//             return row.category == 'large';
//         });
        
//         console.log(filteredResults);
//         }
//     )
// }

//비교할 두 테이블 가져오기
exports.getClass = result => {
    const query1 = 'SELECT datacid, category, score FROM CafeCategory WHERE (datacid, score) IN (SELECT datacid, MAX(score) FROM CafeCategory GROUP BY datacid)';
    sql.query(query1, (err, res1)=>{
        if (err){
            console.error('Error executing query: ' + err.stack);
            return;
        }
        const query2 = 'SELECT * FROM cafe_info';
        sql.query(query2, (err, res2)=>{
            if(err){
                console.error('Error executing query: '+err.stack);
                return;
            }
            const comparedResults = compareArrays(res1, res2);
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//데이터 배열 비교하기
function compareArrays(arr1, arr2){
    const filteredResults = arr1.filter((row1)=>{
        return row1.category == 'coffee';
    });
    console.log(filteredResults);
    const comparedResults = [];
    for (let i=0; i<filteredResults.length; i++){
        for (let j=0; j<arr2.length; j++){
            if (filteredResults[i].datacid == arr2[j].datacid){
                comparedResults.push(arr2[j])
            }
        }
    }
    return comparedResults;
}