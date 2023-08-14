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

exports.singleEmotion = (req, res) => { 
  knex("emotions")
    .where({ id: req.params.id })
    .then((data) => {
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      console.error(`Error retrieving emotion ${req.params.id}:`, err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.createEmotion = (req, res) => { 
  const { name } = req.body;
  const id = uuidv4(); 

  knex("emotions")
    .insert({ id, name })
    .then(() => {
      res.status(201).json({ id, name });
    })
    .catch((err) => {
      console.error("Error creating emotion:", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.updateEmotion = (req, res) => { 
  const { name } = req.body;

  knex("emotions")
    .where({ id: req.params.id })
    .update({ name })
    .then(() => {
      res.status(200).json({ id: req.params.id, name });
    })
    .catch((err) => {
      console.error(`Error updating emotion ${req.params.id}:`, err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

exports.deleteEmotion = (req, res) => { 
  knex("emotions")
    .where({ id: req.params.id })
    .del()
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      console.error(`Error deleting emotion ${req.params.id}:`, err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};
