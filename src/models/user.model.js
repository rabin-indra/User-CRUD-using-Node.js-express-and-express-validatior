const { use } = require("../routes/user.routes");
const dbConn = require("./../../config/db.config");

// create user object
const User = function(user) {
    this.fname = user.fname;
    this.lname = user.lname;
    this.address = user.address;
    this.salary = user.salary;
    this.email = user.email;
};

// save to database
User.create = (newUser, result) => {
    dbConn.query("INSERT INTO users SET ?",newUser, (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created", {id : res.insertId, ...newUser});
        result(null,{id : res.insertId, ...newUser});
    });
}

// retrive user  by id
User.getByID = (id, result) => {
    dbConn.query("SELECT * FROM users where id = ?",id,(err, res)=>{
        if(err){
            console.log("error:", err);
            result(null, err);
        }
        else{
            result(null, res); 
        }

    });
}
 
//retrive all users
User.getAll = (result) => {
    dbConn.query("SELECT * FROM users", (err, res) => {
        if(err){
            console.log("error: ",err);
            result(null, err);
            return;
        }
        result(null,res);
        
    })
}

// update user by id
User.updateById = (id, user, result) => {
    dbConn.query("UPDATE users SET fname = ?, lname = ?, address = ?, salary = ?, email = ? WHERE id = ? ",
    [user.fname, user.lname, user.address, user.salary, user.email, id],(err, res) => {
        if(err){
            console.log("error : ",err);
            result(null,err);
        }
        else{
            result(null, res);
        }
    })
}

// delete user
User.deleteById = (id, result) => {
    dbConn.query("DELETE FROM users WHERE id = ?", [id],(err, res) => {
        if(err){
            console.log("error : ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    })
}

module.exports = User;