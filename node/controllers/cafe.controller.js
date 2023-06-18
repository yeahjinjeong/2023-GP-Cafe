const Cafe = require("../models/cafe.model.js");

exports.findAll = (req, res)=>{
    Cafe.getAll((err, data)=>{
        if (err){
            res.status(500).send({
                message:
                err.message || "Some error occured"
            });
        }
        else res.send(data);
    });
};

exports.findClass = (req, res)=>{
    Cafe.getClass((err, data)=>{
        if (err){
            res.status(500).send({
                message:
                err.message || "Some error occured"
            });
        }
        else res.send(data);
    });
};