const knex = require('../db/db');

module.exports = {
    async createStoryBranch(req, res) {
        const { title, genre, emotion, content, user_id } = req.body;
        try {
            const [newStoryBranchId] = await knex('storybranch').insert({
                title,
                genre,
                emotion,
                content: JSON.stringify([content]),
                user_id
            });
            res.status(201).send({ id: newStoryBranchId });
        } catch (error) {
            res.status(500).send({ message: 'Error creating story branch' });
        }
    },

    async getStoryBranch(req, res) {
        const { id } = req.params;
        try {
            const storyBranch = await knex('storybranch').where({ id }).first();
            if (!storyBranch) {
                return res.status(404).send({ message: 'Story branch not found' });
            }
            res.send(storyBranch);
        } catch (error) {
            res.status(500).send({ message: 'Error fetching story branch' });
        }
    },

    async updateStoryBranch(req, res) {
        const { id } = req.params;
        const data = req.body;
        try {
            await knex('storybranch').where({ id }).update(data);
            res.send({ message: 'Story branch updated successfully' });
        } catch (error) {
            res.status(500).send({ message: 'Error updating story branch' });
        }
    },

    async addContribution(req, res) {
        const { id } = req.params;
        const { content, user_id } = req.body;
        try {
            const storyBranch = await knex('storybranch').where({ id }).first();
            if (!storyBranch) {
                return res.status(404).send({ message: 'Story branch not found' });
            }
            const updatedContent = JSON.parse(storyBranch.content);
            updatedContent.push({ content, user_id });
            await knex('storybranch').where({ id }).update({ content: JSON.stringify(updatedContent) });
            res.send({ message: 'Contribution added successfully' });
        } catch (error) {
            res.status(500).send({ message: 'Error adding contribution' });
        }
    }
};


