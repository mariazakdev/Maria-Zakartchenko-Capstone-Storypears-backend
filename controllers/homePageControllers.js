const getHomePage = async (req, res) => {
    // Assuming a successful login, perform a redirect to the frontend URL
    res.redirect('http://localhost:3000/', {
      user: req.user
    });
  };
  
  module.exports = {
    getHomePage,
  };