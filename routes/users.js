const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const authenticate = require('../middlewares/authenticate')

//@route POST /api/users
//@desc Register a User
//@access public

router.post(
  '/',
  [
    check('firstname', 'First Name is required').not().isEmpty(),
    check('lastname', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email address').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters',
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { firstname, lastname, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      if (user) {
        return res.status(400).json({ message: 'User Already Exists' })
      }

      user = new User({ firstname, lastname, email, password })

      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
          id: user.id,
        },
      }

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600000,
        },
        (err, token) => {
          if (err) throw err

          res.send({ token })
        },
      )
    } catch (error) {
      console.error(error.message)
      res.status(500).send('Server Error')
    }
  },
)

//@route PUT /api/users
//@desc Update a User
//@access private

router.put('/:id', authenticate, async (req, res) => {
  const { firstname, lastname, email, nickname } = req.body

  const profileFields = {}

  if (firstname) profileFields.firstname = firstname
  if (lastname) profileFields.lastname = lastname
  if (email) profileFields.email = email
  if (nickname) profileFields.nickname = nickname

  try {
    let user = await User.findById(req.params.id)

    if (!user) {
      return res.status(400).json({ message: 'User does not exist' })
    }

    if (user.id.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized, Login' })
    }

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: profileFields },
      { new: true },
    )
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

//@route DELETE api/tasks
//@desc DELETE a task
//@access private

router.delete('/:id', authenticate,  async (req, res) => {
  try {
    let user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    if (user.id.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized, Login' })
    }

    await User.findByIdAndRemove(req.params.id)

    res.json({ message: 'User deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

module.exports = router
