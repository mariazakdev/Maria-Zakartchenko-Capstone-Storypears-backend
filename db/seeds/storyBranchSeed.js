const storyBranchData = require('../seed_data/storyBranch');

exports.seed = async function(knex) {
    try {
        await knex('storybranch').del();
        await knex('storybranch').insert(storyBranchData);
        console.log("storybranch table seeded successfully");
    } catch (error) {
        console.error("Error seeding storybranch table", error);
    }
};
