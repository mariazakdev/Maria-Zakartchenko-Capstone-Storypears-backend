const { v4: uuidv4 } = require('uuid');
const knex = require('../db/db');

const createStoryContent = async (req, res) => {
  try {
    const { story_id, user_id, content, genre, title } = req.body;
    const id = uuidv4();

    await knex('story_contents').insert({
      id,
      story_id,
      user_id,
      content,
      genre, 
      title, 
    });

    return res.status(201).json({ id, story_id, user_id, content, genre, title });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create story content' });
  }
};

// Get all story contents
const getAllStoryContents = async (req, res) => {
  try {
    // Retrieve all story contents from the database
    const storyContents = await knex('story_contents').select('*');

    return res.status(200).json(storyContents);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch story contents' });
  }
};
// Get a single story content by ID
const getStoryContentById = async (req, res) => {
  const { id } = req.params;

  try {
    // Retrieve the story content by its ID
    const storyContent = await knex('story_contents').where({ id }).first();

    if (!storyContent) {
      return res.status(404).json({ error: 'Story content not found' });
    }

    return res.status(200).json(storyContent);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch story content' });
  }
};

// Update a story content by ID
const updateStoryContent = async (req, res) => {
  const { id } = req.params;

  try {
    // Extract data from the request body for updates
    const { content } = req.body;

    // Update the story content in the database
    await knex('story_contents').where({ id }).update({ content });

    return res.status(200).json({ id, content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update story content' });
  }
};

// Delete a story content by ID
const deleteStoryContent = async (req, res) => {
  const { id } = req.params;

  try {
    // Delete the story content from the database
    await knex('story_contents').where({ id }).del();

    return res.status(204).end(); // No content, successful deletion
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to delete story content' });
  }
};

module.exports = {
  createStoryContent,
  getAllStoryContents,
  getStoryContentById,
  updateStoryContent,
  deleteStoryContent,
};
