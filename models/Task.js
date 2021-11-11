const mongoose = require('mongoose')

const TasksSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  task: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'needs attention',
  },
}, { timestamps: true })

module.exports = mongoose.model('task', TasksSchema)
