const storyContentsSeedData = require("../seed_data/storyContents");

exports.seed = function (knex) {
  return knex.transaction(async (trx) => {
    try {

      await knex('story_contents').transacting(trx).insert(storyContentsSeedData);

      await trx.commit();
    } catch (error) {
      await trx.rollback(error);
    }
  });
};