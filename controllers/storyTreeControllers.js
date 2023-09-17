const knex = require('../db/db');

module.exports = {

    async createStoryTree(req, res) {
        const { title, genre, emotion, content, branch_id } = req.body;
        
        try {
            await knex.transaction(async trx => {
                const existingStoryTree = await trx('storytree').where({ title }).first();
        
                if (existingStoryTree) {
                    await trx('storytree')
                        .where({ title })
                        .update({
                            genre,
                            emotion,
                            complete_story: JSON.stringify(content)
                        });
                    res.status(200).send({ message: 'Story tree updated successfully' });
                } else {
                    const [newStoryTreeId] = await trx('storytree').insert({
                        title,
                        genre,
                        emotion,
                        complete_story: JSON.stringify(content)
                    });
    
                    if (branch_id) {
                        await trx('storybranch').where({ id: branch_id }).del();  
                    }
    
                    res.status(201).send({ id: newStoryTreeId, message: 'Story tree created successfully' });
                }
            });
        } catch (error) {
            console.error("Transaction error:", error);
            res.status(500).send({ message: 'Error processing story tree' });
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
