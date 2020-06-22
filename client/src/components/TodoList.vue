<template>
  <div v-if="todos" style='padding: 50px 0'>
    <h3>Todo List</h3>
    <ul class='todo-list'>
      <li
        v-for='todo in todos'
        :key="todo._id">
        <span
          v-bind:class="getClass(todo)"
          @click="updateTodo(todo._id, { done: !todo.done })">
          {{ todo.name.toUpperCase() }}</span>
        <button
          class='delete-btn'
          @click='deleteTodo(todo._id)'
        >X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import TodoService from '../api/todo.api'

export default {
  name: 'TodoList',
  props: {
    todos: Array
  },
  methods: {
    getClass(todo) {
      return {
        'done': todo.done,
        'remove-line': todo.done,
        'mark-through': !todo.done
      }
    },
    updateTodo(id, todo) {
      TodoService.updateTodo(id, todo)
        .then(() => this.$emit('updated-todo'))
        .catch(err => alert(err))
    },
    deleteTodo(id) {
      TodoService.deleteTodo(id)
        .then(() => this.$emit('deleted-todo'))
        .catch(err => alert(err))
    }
  }
}
</script>

<style scoped>
.todo-list {
  list-style-position: inside;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  height: 80vh;
  overflow: scroll;
}

.todo-list li {
  margin: 0 auto;
  padding: 10px;
  margin-right: 0;
}

.mark-through:hover {
  text-decoration: line-through;
  cursor: pointer;
}

.remove-line:hover {
  text-decoration: none;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}

.delete-btn {
  background-color: white;
  border: none;
  color: red;
  border-radius: 10px;
  outline: none;
  padding: 2px 5px;
  margin-left: 5px;
  position: relative;
}

.delete-btn:hover {
  background-color: red;
  color: white;
  cursor: pointer;
}

.delete-btn:hover:after {
  content: ' delete'
}
</style>