const { validationResult } = require("express-validator");
const loginService = require("../services/loginService");


async function authenticateUser(email, password) {
    try {
      const user = await db("users")
        .where({ email: email })
        .first();
  
      if (user && user.password === password) {
        // User is authenticated
        return user;
      } else {
        // User not found or incorrect password
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
  
  module.exports = {
    authenticateUser,
  };


// const handleLogin = async (req, res) => {
//     let errorsArr = [];
//     let validationErrors = validationResult(req);
//     if (!validationErrors.isEmpty()) {
//         let errors = Object.values(validationErrors.mapped());
//         errors.forEach((item) => {
//             errorsArr.push(item.msg);
//         });
//         return res.redirect("/login");
//     }

//     try {
//         await loginService.handleLogin(req.body.email, req.body.password);
//         return res.redirect("/");
//     } catch (err) {
//         return res.redirect("/login");
//     }
// };

// const checkLoggedIn = (req, res, next) => {
//     if (!req.isAuthenticated()) {
//         return res.redirect("/login");
//     }
//     next();
// };

// const checkLoggedOut = (req, res, next) => {
//     if (req.isAuthenticated()) {
//         return res.redirect("/");
//     }
//     next();
// }; 

// const postLogOut = (req, res) => {
//     req.session.destroy(function(err) {
//         return res.redirect("/login");
//     });
// };

// module.exports = {
//     handleLogin,
//     checkLoggedIn,
//     checkLoggedOut,
//     postLogOut
// };