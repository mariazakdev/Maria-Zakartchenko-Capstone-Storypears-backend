const knex = require('../db/db');

module.exports = {

    // createStoryTree tansaction portion was helped with help of chatGPT. Was modified by me. 

    async createStoryTree(req, res) {
        const { title, genre, emotion, content, user_id, branch_id } = req.body;
    
        if (!branch_id) {
            return res.status(400).send({ message: 'Branch ID is required' });
        }
    
        try {
            await knex.transaction(async trx => {
                const [newStoryTreeId] = await trx('storytree').insert({
                    title,
                    genre,
                    emotion,
                    complete_story: JSON.stringify(content),
                    user_id
                });
    
                await trx('storybranche').where({ id: branch_id }).del();
                res.status(201).send({ id: newStoryTreeId });
            });
        } catch (error) {
            console.error("Transaction error:", error);
            res.status(500).send({ message: 'Error creating story tree' });
        }
    },


    async getAllStoryTrees(req, res) {
        try {
            const allStoryTrees = await knex('storytree').select();
            res.send(allStoryTrees);
        } catch (error) {
            res.status(500).send({ message: 'Error fetching all story trees' });
        }
    },
    async getStoryTree(req, res) {
        const { id } = req.params;
        try {
            const storyTree = await knex('storytree').where({ id }).first();
            if (!storyTree) {
                return res.status(404).send({ message: 'Story tree not found' });
            }
            res.send(storyTree);
        } catch (error) {
            res.status(500).send({ message: 'Error fetching story tree' });
        }
    },

    async deleteStoryTree(req, res) {
        const { id } = req.params;
        try {
            await knex('storytree').where({ id }).del();
            res.send({ message: 'Story tree deleted successfully' });
        } catch (error) {
            res.status(500).send({ message: 'Error deleting story tree' });
        }
    }, 
};