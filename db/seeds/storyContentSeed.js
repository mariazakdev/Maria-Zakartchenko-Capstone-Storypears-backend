const storyContentsData = require("../seed_data/storyContents");

exports.seed = async function (knex) {
  try {
    // Start a transaction to ensure data consistency
    await knex.transaction(async (trx) => {
      // Delete all rows from story_contents
      await trx("story_contents").del();

      // Fetch user data
      const users = await trx("users")
        .whereIn('id', storyContentsData.map(item => item.user_id));

      // Map user IDs in storyContentsData to actual user IDs
      const updatedStoryContentsData = storyContentsData.map(item => {
        const user = users.find(u => u.id === item.user_id);
        if (user) {
          item.user_id = user.id;
        }
        return item;
      });

      // Insert updated story content data
      await trx("story_contents").insert(updatedStoryContentsData);
    });

    console.log("Data seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};
