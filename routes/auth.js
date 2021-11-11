const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const auth = require('../middlewares/authenticate')
const config = require('config')

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }
})

//@route POST /api/auth
//@desc Authenticates a user onLogin and send token as response
//@access Public

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: 'invalid credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }

      const payload = {
        user: {
          id: user.id,
        }
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw error

          res.json({ token })
        },
      )
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  },
)

module.exports = router
