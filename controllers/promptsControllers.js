const knex = require('../db/db');
const { v4: uuidv4 } = require('uuid');

exports.index = async (req, res) => {
  try {
    const prompts = await knex('prompts').select('*');
    res.status(200).json(prompts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.singlePrompt = async (req, res) => {
  const promptId = req.params.id;
  try {
    const prompt = await knex('prompts').where({ id: promptId }).first();
    if (!prompt) {
      return res.status(404).json({ message: 'Prompt not found' });
    }
    res.status(200).json(prompt);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createPrompt = async (req, res) => {
  try {
    if (!req.body.sentence) {
      return res.status(400).json({ message: 'Sentence is required' });
    }

    const newPrompt = {
      id: uuidv4(), 
      sentence: req.body.sentence 
    };

    await knex('prompts').insert(newPrompt);
    res.status(201).json({ message: 'Prompt created successfully', id: newPrompt.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updatePrompt = async (req, res) => {
  const promptId = req.params.id;
  try {
    await knex('prompts').where({ id: promptId }).update(req.body);
    res.status(200).json({ message: 'Prompt updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deletePrompt = async (req, res) => {
  const promptId = req.params.id;
  try {
    await knex('prompts').where({ id: promptId }).del();
    res.status(200).json({ message: 'Prompt deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
