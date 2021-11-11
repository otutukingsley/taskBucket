const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const { check, validationResult } = require('express-validator')
const Task = require('../models/Task')

//@route GET api/tasks
//@desc Get all tasks
//@access private

router.get('/', authenticate, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 })
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

//@route POST api/tasks
//@desc create a new task
//@access private

router.post(
  '/',
  authenticate,
  [check('task', 'Please add a task').not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).send({ error: errors.array() })
    }

    const { task, status } = req.body

    try {
      const newTask = new Task({
        task,
        status,
        user: req.user.id,
      })

      const theNewTask = await newTask.save()
      res.json({ theNewTask })
    } catch (error) {
      console.error(error)
      res.status(500).send(' Server Error')
    }
  },
)

//@route PUT api/tasks
//@desc update a tasks
//@access private

router.put('/:id', authenticate, async (req, res) => {
  const { task, status } = req.body

  const taskFields = {}
  if (task) taskFields.task = task
  if (status) taskFields.status = status

  try {
    let task = await Task.findById(req.params.id)

    if (!task) {
      return res.status(400).json({ message: 'Task not found' })
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized, Login' })
    }

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: taskFields },
      { new: true },
    )

    res.json(task)
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
    let task = await Task.findById(req.params.id)

    if (!task) {
      return res.status(404).json({ message: 'Task not found' })
    }

    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized, Login' })
    }

    await Task.findByIdAndRemove(req.params.id)

    res.json({ message: 'Task deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

module.exports = router
