const storyTreeData = require('../seed_data/storyTree');

exports.seed = async function(knex) {
    try {
        await knex('storytree').del();
        await knex('storytree').insert(storyTreeData);
        console.log("storytree table seeded successfully");
    } catch (error) {
        console.error("Error seeding storytree table", error);
    }
};
