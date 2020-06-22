const express = require('express')
const router = express.Router()

const todo_controller = require('../controllers/todo.controller')

router.get('/', todo_controller.get)
router.post('/', todo_controller.post)
router.patch('/:id', todo_controller.patch)
router.delete('/:id', todo_controller.delete)

module.exports = router