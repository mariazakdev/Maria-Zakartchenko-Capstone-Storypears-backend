const { check, validationResult } = require('express-validator');

const validateRegister = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password. Password must be at least 2 chars long")
        .isLength({ min: 2 }),

    check("password2", "Password confirmation does not match password")
        .custom((value, { req }) => {
            return value === req.body.password;
        }),

    check("first_name", "Invalid first name").isString().trim(),
    check("last_name", "Invalid last name").isString().trim(),
    check("pen_first_name", "Invalid pen first name").isString().trim(),
    check("pen_last_name", "Invalid pen last name").isString().trim(),
    check("bio", "Invalid bio").isString().trim().isLength({ max: 500 }),
];

const validateLogin = [
    check("email", "Invalid email").isEmail().trim(),
    check("password", "Invalid password").isString().trim().notEmpty(),
];
// Middleware
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validateRegister,
    validateLogin,
    validate,
};
