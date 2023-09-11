const knex = require("../db/db");

exports.index = async (req, res) => {
  try {
    const fullstories = await knex("full_stories").select("*");
    res.status(200).json(fullstories);
  } catch (error) {
    res.status(500).json({ message: "Error occurred while fetching stories" });
  }
};

exports.getFullStory = async (req, res) => {
  try {
    const fullstory = await knex("full_stories")
      .where("id", req.params.id)
      .first();

    if (!fullstory) {
      return res.status(404).json({ message: "Story not found" });
    }

    res.status(200).json(fullstory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occurred while fetching the story" });
  }
};

exports.createFullStory = async (req, res) => {
  try {
    const [newFullStoryId] = await knex("full_stories")
      .insert(req.body)
      .returning("id");
    const newFullStory = await knex("full_stories")
      .where("id", newFullStoryId)
      .first();

    res.status(201).json(newFullStory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occurred while creating the story" });
  }
};

exports.deleteFullStory = async (req, res) => {
  try {
    const rowsDeleted = await knex("full_stories")
      .where("id", req.params.id)
      .del();

    if (!rowsDeleted) {
      return res.status(404).json({ message: "Story not found" });
    }

    res.status(200).json({ message: "Story deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occurred while deleting the story" });
  }
};
