const express = require('express')
const router = express.Router()

//@route GET api/tasks
//@desc Get all tasks
//@access private

router.get('/', async (req, res) => {
  res.send({ msg: 'Hello World get' })
})

//@route POST api/tasks
//@desc create a new task
//@access private

router.post('/', async (req, res) => {
  res.send({ msg: 'Hello World post' })
})

//@route PUT api/tasks
//@desc update a tasks
//@access private

router.put('/', async (req, res) => {
  res.send({ msg: 'Hello World put' })
})

//@route DELETE api/tasks
//@desc DELETE a task
//@access private

router.delete('/', async (req, res) => {
  res.send({ msg: 'Hello World delete' })
})


module.exports = router;