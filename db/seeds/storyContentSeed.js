const storyContentsData = require("../seed_data/storyContents"); 

exports.seed = function (knex) {
  return knex("story_contents")
    .del()
    .then(function () {
      return knex("users")
        .whereIn('username', storyContentsData.map(item => item.user_id))
        .then(users => {
          const updatedStoryContentsData = storyContentsData.map(item => {
            const user = users.find(u => u.username === item.user_id);
            if (user) {
              item.user_id = user.id;
            }
            return item;
          });

          return knex("story_contents").insert(updatedStoryContentsData);
        });
    });
};
