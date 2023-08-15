const knex = require("../db/db");

exports.index = async (req, res) => {
  try {
    const halfstories = await knex("halfstories").select("*");
    res.status(200).json(halfstories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.singleHalfStory = async (req, res) => {
  const halfStoryId = req.params.id;
  try {
    const halfStory = await knex("halfstories").where({ id: halfStoryId }).first();
    if (!halfStory) {
      return res.status(404).json({ message: "Half story not found" });
    }
    res.status(200).json(halfStory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createHalfStory = async (req, res) => {
  try {
    await knex("halfstories").insert(req.body);
    res.status(201).json({ message: "Half story created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateHalfStory = async (req, res) => {
  const halfStoryId = req.params.id;
  try {
    await knex("halfstories").where({ id: halfStoryId }).update(req.body);
    res.status(200).json({ message: "Half story updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteHalfStory = async (req, res) => {
  const halfStoryId = req.params.id;
  try {
    await knex("halfstories").where({ id: halfStoryId }).del();
    res.status(200).json({ message: "Half story deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
