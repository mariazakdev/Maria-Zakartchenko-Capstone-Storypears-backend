const { v4: uuidv4 } = require("uuid");
const knex = require("../db/db");

exports.index = (req, res) => {
  knex("emotions")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error retrieving emotions from API", err);
      res.status(500).send("Internal Server Error");
    });
};

exports.index = (req, res) =>{
    knex("emotions")
    .where({id:req.params.id})
    .then((data)=>{
        res.status(200).json(data[0]);
    }).catch((err)=>{
        console.error(`Error retrieving emotion ${req.params.id}:`, err);
      res.status(500).json({ error: "Internal Server Error" });
    });

    };
