async function getProfile(req, res) {
    try {
      // Fetch the user's profile from the database using the user ID stored in req.userId
      const user = await knex('users').where({ id: req.userId }).first();
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user's profile in the response
      res.status(200).json({ user });
    } catch (err) {
      console.error('Profile retrieval error:', err);
      res.status(500).json({ message: 'Error retrieving profile' });
    }
  }
  
  module.exports = { getProfile };