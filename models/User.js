const mongoose = require('mongoose')
const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
    },
  },
  { timestamps: true },
)

UserSchema.pre('save', function (next) {
  if (!this.nickname) {
    this.nickname = this.firstname + this.lastname
  }
  next()
})

module.exports = mongoose.model('user', UserSchema)
