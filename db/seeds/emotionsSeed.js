//not using seed data file as this table is not long. 
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('emotions').del()
      .then(function () {
        // Inserts seed entries
        return knex('emotions').insert([
          { name: 'Euphoria' },
          { name: 'Melancholy' },
          { name: 'Rage' },
          { name: 'Anticipation' },
          { name: 'Serenity' },
          { name: 'Trepidation' },
          { name: 'Awe' },
          { name: 'Revulsion' },
          { name: 'Bewilderment' },
          { name: 'Longing' },
          { name: 'Desolation' },
          { name: 'Silly' },
          { name: 'Nostalgia' },
          { name: 'Indignation' },
          { name: 'Intrigue' },
          { name: 'Depression' },
          { name: 'Love' },
        ]);
      });
  };