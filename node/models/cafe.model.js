const sql = require("./db.js");

// const User = function(user){
//     this.username = user.username;
//     this.pw = user.pw;
//     this.birth = user.birth;
//     this.sex = user.sex;
//     this.email = user.email;
// }

// User.create = (newUser, result)=>{
//     sql.query("INSERT INTO user_info SET ?", newUser, (err, res)=>{
//         if(err){
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }

//         console.log("Created user: ", {username: res.in})
//     })
// }

exports.getAll = result => {
    sql.query('SELECT * FROM cafe_info', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log(res);
        result(null, res)
        }
    )
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

//데이터 배열 비교하기
function compareArrays(arr1, arr2, str){
    const filteredResults = arr1.filter((row1)=>{
        return row1.category == str;
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

//비교할 두 테이블 가져오기
//Brunch
exports.getBrunch = result => {
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
            const comparedResults = compareArrays(res1, res2, 'brunch');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Coffee
exports.getCoffee = result => {
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
            const comparedResults = compareArrays(res1, res2, 'coffee');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Tea
exports.getTea = result => {
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
            const comparedResults = compareArrays(res1, res2, 'tea');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Dessert
exports.getDessert = result => {
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
            const comparedResults = compareArrays(res1, res2, 'dessert');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Dessert
exports.getVegan = result => {
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
            const comparedResults = compareArrays(res1, res2, 'vegan');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Study
exports.getStudy = result => {
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
            const comparedResults = compareArrays(res1, res2, 'study');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Team
exports.getTeam = result => {
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
            const comparedResults = compareArrays(res1, res2, 'team');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Large
exports.getLarge = result => {
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
            const comparedResults = compareArrays(res1, res2, 'large');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Chat
exports.getChat = result => {
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
            const comparedResults = compareArrays(res1, res2, 'chat');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Child
exports.getChild = result => {
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
            const comparedResults = compareArrays(res1, res2, 'child');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Senior
exports.getSenior = result => {
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
            const comparedResults = compareArrays(res1, res2, 'senior');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Party
exports.getParty = result => {
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
            const comparedResults = compareArrays(res1, res2, 'party');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Sns
exports.getSns = result => {
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
            const comparedResults = compareArrays(res1, res2, 'sns');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Rest
exports.getRest = result => {
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
            const comparedResults = compareArrays(res1, res2, 'rest');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}

//Theme
exports.getTheme = result => {
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
            const comparedResults = compareArrays(res1, res2, 'theme');
            // console.log(comparedResults);
            result(null, comparedResults);
        })
    })
}