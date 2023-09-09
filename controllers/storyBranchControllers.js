const knex = require('../db/db');

exports.createStoryBranch = async (req, res) => {
    try {
        const [id] = await knex('storybranch').insert({
            content: JSON.stringify(req.body.content)
        });
        res.status(201).send({ id, content: req.body.content });
    } catch (error) {
        res.status(500).send({ error: 'Error creating story branch' });
    }
};

exports.getAllStoryBranches = async (req, res) => {
    try {
        const storyBranches = await knex('storybranch').select();
        res.status(200).send(storyBranches);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching all story branches' });
    }
};

exports.getStoryBranch = async (req, res) => {
    try {
        const storyBranch = await knex('storybranch').where('id', req.params.id).first();
        if (storyBranch) {
            res.status(200).send(storyBranch);
        } else {
            res.status(404).send({ error: 'Story branch not found' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Error fetching story branch' });
    }
};

exports.updateStoryBranch = async (req, res) => {
    try {
        const storyBranch = await knex('storybranch').where('id', req.params.id).first();
        
        if (!storyBranch) {
            return res.status(404).send({ error: 'Story branch not found' });
        }
        
        const contributions = JSON.parse(storyBranch.content);
        contributions.push({ user_id: req.body.user_id, text: req.body.text });
        
        await knex('storyBranches').where('id', req.params.id).update({
            content: JSON.stringify(contributions)
        });

        res.status(200).send({ message: 'Story branch updated successfully' });
    } catch (error) {
        res.status(500).send({ error: 'Error updating story branch' });
    }
};

exports.deleteStoryBranch = async (req, res) => {
    try {
        await knex('storybranch').where('id', req.params.id).delete();
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ error: 'Error deleting story branch' });
    }
};

exports.addContribution = async (req, res) => {
    const { user_id, text } = req.body;
  
    try {
      const storyBranch = await knex('storybranch').where('id', req.params.id).first();
      
      if (!storyBranch) {
        return res.status(404).send({ error: 'Story branch not found' });
      }
  
      const contributions = Array.isArray(JSON.parse(storyBranch.content))
        ? JSON.parse(storyBranch.content)
        : [];
  
      contributions.push({ user_id, text });
  
      await knex('storybranch').where('id', req.params.id).update({
        content: JSON.stringify(contributions)
      });
  
      res.status(201).send({ message: 'Contribution added successfully' });
    } catch (error) {
      res.status(500).send({ error: 'Error adding contribution' });
    }
  };
  