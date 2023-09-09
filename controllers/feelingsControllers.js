const knex = require("../db/db");
const { v4: uuidv4 } = require('uuid');



exports.index = async (req, res) => {
  try {
    const feelings = await knex("feelings").select("*");
    res.status(200).json(feelings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getFeeling = async (req, res) => {
  const feelingId = req.params.id;
  try {
    const feeling = await knex("feelings").where({ id: feelingId }).first();
    if (!feeling) {
      return res.status(404).json({ message: "Feeling not found" });
    }
    res.status(200).json(feeling);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createFeeling = async (req, res) => {
  try {
      if (!req.body.sentence) {
          return res.status(400).json({ message: 'Sentence is required' });
      }

      const newFeeling = {
          id: uuidv4(), 
          sentence: req.body.sentence 
      };

      await knex('feelings').insert(newFeeling);
      res.status(201).json({ message: 'Feeling created successfully', id: newFeeling.id });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateFeeling = async (req, res) => {
  const feelingId = req.params.id;
  try {
    await knex("feelings").where({ id: feelingId }).update(req.body);
    res.status(200).json({ message: "Feeling updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteFeeling = async (req, res) => {
  const feelingId = req.params.id;
  try {
    await knex("feelings").where({ id: feelingId }).del();
    res.status(200).json({ message: "Feeling deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
