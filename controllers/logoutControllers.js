function logout(req, res) {
  req.logout(); // No callback needed

  // You can send a JSON response or redirect as per your application's requirements.
  // If you want to send a JSON response, you can do it like this:
  // res.status(200).json({ message: "Logout successful" });

  // If you want to redirect the user after logout, you can do it like this:
  res.redirect(process.env.CLIENT_URL);
}

module.exports = {
  logout,
};
