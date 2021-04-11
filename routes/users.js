const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator/check')

const User = require("../models/Users");

// @route POST api/users
// @desc register a user
// @access Public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Valid email is required").isEmail() ,
    check("password", "Please enter a password with 6 + characters").isLength({
      min: 6,
    }),
  ],
  // we can put async anywhere where we request some data?
  async (req, res) => {
    const errors = validationResult(req)
      if(!errors.isEmpty()){
          return res.status(400 ).json({errors: errors.array()})
      }

      const { name, email, password } = req.body

      try {
          // mongoose method find one
          let user = await User.findOne({ email })

          if(user) {
              return res.status(400).json({ msg: 'User already exists' })
          }

          // we formed a model and now we are using it
          user = new User({
              name,
              email,
              password
          })

          const salt = await bcrypt.genSalt(10)

          user.password = await bcrypt.hash(password, salt)

          await user.save()

          const payload = {
              user:{
                  id:user.id
              }
          }

          jwt.sign(payload, config.get('jwtSecret'), {
              expiresIn: 360000
          },(err, token) => {
              if(err) throw err
              res.json({ token })
          })
      } catch (err) {
          console.error(err.message)
          res.status(500).send('Server error...')
      }
  }
);

module.exports = router;
