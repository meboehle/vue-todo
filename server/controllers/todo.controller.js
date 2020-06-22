const Todo = require('../models/todo.model')
const ObjectId = require('mongoose').Types.ObjectId;

exports.get = (req, res) => {
  Todo.find({}, (err, data) => {
    if (err) res.send(err)
    res.send(data)
  })
}

exports.post = (req, res) => {
  let todo = new Todo(req.body)
  if (!todo.name) {
    res.status(400).send('Todo name is required')
    return
  }
  Todo.create({ name: todo.name }, (err, data) => {
    if (err) res.send(err)
    res.json(data)
  })
}

exports.patch = (req, res) => {
  Todo.findByIdAndUpdate(
    ObjectId(req.params.id),
    {$set: req.body},
    {new: true},
    (err, data) => {
    if (err) res.send(err)
    res.json(data)
  })
}

exports.delete = (req, res) => {
  Todo.findByIdAndDelete(
    ObjectId(req.params.id),
    (err, data) => {
      if (err) res.send(err)
      res.json(data)
    }
  )
}