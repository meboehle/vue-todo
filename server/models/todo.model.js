const mongoose = require('../config/db')
const { Schema } = mongoose

const TodoSchema = new Schema({
  name: {
    type: String,
  },
  done: {
    type: Boolean,
    default: false
  },
})

module.exports = mongoose.model('Todo', TodoSchema)