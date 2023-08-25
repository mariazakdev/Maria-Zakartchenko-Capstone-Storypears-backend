const { v4: uuidv4 } = require("uuid");
const knex = require('../db/db');

exports.index = (req, res) =>{
  knex("stories")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error("Error retrieving stories from API", err);
      res.status(500).send("Internal Server Error");
    });
};

exports.singleStory = (req, res) => {
  knex("stories")
    .where({ id: req.params.id })
    .then((data) => {
      if (!data.length) {
        return res
          .status(404)
          .json({ error: `Record with id: ${req.params.id} is not found` });
      }
      res.status(200).json(data[0]);
    })
    .catch((err) => {
      console.error(`Error retrieving story ${req.params.id}:`, err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};


// Validate the request body. Only user1 required.
exports.createStory = (req, res) => {
  const { title, date, user1_id, genre, story, genre_id } = req.body;
  if (
    !title ||
    !date ||
    !user1_id ||
    !genre ||
    !story ||
    genre_id === undefined
  ) {
    return res
      .status(422)
      .json({ error: "Unprocessable Entity: All fields are required -backend" });
  }
  const newId = uuidv4();
  knex("stories")
    .insert({
      id: newId,
      title,
      date,
      user1_id,
      genre,
      story,
      genre_id,
    })
    .then(() => {
      res.status(201).json({ success: true, id: newId });
    })
    .catch((err) => {
      console.error("Error creating a story:-backend:", err);
      res.status(500).json({ error: "Internal Server Error -backend" });
    });
};

exports.updateStory = async (req, res) => {
  const { id } = req.params;
  const { title, date, user1_id, user2_id, genre, story, genre_id } = req.body;
  try {
    await knex("stories").where("id", id).update({
      title,
      date,
      user1_id,
      user2_id,
      genre,
      story,
      genre_id,
    });
    res.json({ message: "Story updated successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the story." });
  }
};

exports.deleteStory = async (req, res) => {
  const { id } = req.params;
  try {
    const story = await knex("stories").where("id", id).first();
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }
    await knex("stories").where("id", id).del();
    res.status(204).end();
  } catch (err) {
    console.error("Error deleting story:", err);
    res.status(500).send("Internal Server Error");
  }
};
