
async function getProfile(req, res) {
  try {
    const { id, email, first_name, last_name, pen_first_name, pen_last_name, bio } = req.user;

    const userProfile = {
      id,
      email,
      first_name,
      last_name,
      pen_first_name,
      pen_last_name,
      bio
    };

    res.json({
      message: 'You have access to this protected route!',
      user: userProfile,
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Error fetching user profile.' });
  }
}

module.exports = {
  getProfile,
}