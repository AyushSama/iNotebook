const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

router.post(
    "/createuser",
    [
        body("name").isLength({ min: 5 }),
        body("email").isEmail(),
        body("password").isLength({ min: 8 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Check whether the user with this email exists already
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({
                    error: "Sorry a user with this email already exists",
                });
            }
            // Create a new user
            const salt = await bcrypt.genSaltSync(10);
            const secPass = await bcrypt.hashSync(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                password: secPass,
                email: req.body.email,
            });
            const data = {
                user: {
                    id: user.id,
                },
            };
            var authToken = jwt.sign(data, "@&^^#$&!^(@&#$!(&(*&(");
            res.json({ authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some Error occured");
        }
    },
);

module.exports = router;
