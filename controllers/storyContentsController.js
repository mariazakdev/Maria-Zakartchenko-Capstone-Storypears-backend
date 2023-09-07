const { v4: uuidv4 } = require('uuid');
const knex = require('../db/db');


const createStoryContent = async (req, res) => {
  try {
    const { story_id, user_id, content, genre, emotion, title } = req.body;

    await knex('story_contents').insert({
      story_id,
      user_id,
      content,
      genre: genre || null, 
      emotion: emotion || null, 
      title, 
    });

    return res.status(201).json({ message: 'Story content created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to create story content' });
  }
};

const getAllStoryContents = async (req, res) => {
  try {
    const storyContents = await knex('story_contents').select('*');

    return res.status(200).json(storyContents);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch story contents' });
  }
};
const getStoryContentById = async (req, res) => {
  const { id } = req.params;

  try {
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

const updateStoryContent = async (req, res) => {
  const { id } = req.params;

  try {
    const { content } = req.body;

    await knex('story_contents').where({ id }).update({ content });

    return res.status(200).json({ id, content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to update story content' });
  }
};

const deleteStoriesByStoryId = async (req, res) => {
  const { storyId } = req.params;

  try {
    await knex('story_contents').where({ story_id: storyId }).del();

    return res.status(204).end(); 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to delete story contents' });
  }
};

module.exports = {
  createStoryContent,
  getAllStoryContents,
  getStoryContentById,
  updateStoryContent,
  deleteStoriesByStoryId,
};
