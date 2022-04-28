const { getEventListeners } = require("events");
const { isBuffer } = require("util");
const User = require("./../models/user.model");
const { validationResult } = require("express-validator");

exports.create = (req, res)=> {
    const user = new User({
        fname : req.body.fname,
        lname : req.body.lname,
        address: req.body.address,
        salary : parseInt(req.body.salary),
        email :req.body.email
    });
    
//    try{

//     if (parseFloat(req.body.salary) <= 0) {
//         res.message = "Invalid salary. Salary cannot be negative or Zero.";
//         return (res, null);
//       }
//     }catch(err){
//         return(err)
//     }

    User.create(user, (err, data)=> {
        if(err)
        res.status(500).send({
            message:
            err.message || "Error occured while creating the User."
        });
        else
        res.status(200).send(data);
    });
}


exports.getById = (req, res) => {
    User.getByID(req.params.id, (err, user) => {
        if (err) 
        res.status(500).send({
            message:
            err.message || "Error while retriving the user."
        });
        res.json(user);
        
    })
}

exports.getAll = (req, res) => {
    User.getAll((err, user) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Error occured while retriving all users."
        });
        else
        res.json(user);
    });
}

exports.updateById = (req, res) => {
    User.updateById(req.params.id, new User(req.body), (err, user)=> {
        if(err)
        res.status(500).send({
            message:
            err.message || "Error occured while updating the user."
        })
        else
        res.json({
            message: "User successfully Updated."
        });
    });
}

exports.deleteById = (req, res) => {
    User.deleteById(req.params.id,(err, user) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Error occured while deleting the user."
        });
        res.json({
            message: "User Successfully Deleted"
        });
    });
}