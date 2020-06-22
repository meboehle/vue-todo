<template>
  <div id="app">
    <nav-bar />
    <todo-list :todos=todos @updated-todo='getTodos' @deleted-todo='getTodos' id='todo-list' />
    <new-todo @added-new-todo='getTodos' id='add-todo' />
    <a href='#nav-bar' v-scroll-to="'#nav-bar'">
      <font-awesome-icon icon="arrow-up" class='arrow-icon' id='arrow-icon' />
    </a>
  </div>
</template>

<script>
import TodoService from './api/todo.api'
import TodoList from './components/TodoList.vue'
import NewTodo from './components/NewTodo.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    NewTodo,
    NavBar
  },
  data () {
    return {
      todos: [],
      windowHeight: 0
    }
  },
  methods: {
    getTodos () {
      TodoService.getTodos()
        .then(res => this.todos = res)
        .catch(err => console.log(err))
    },
    displayArrow () {
      let arrow = document.getElementById('arrow-icon')
      if (window.scrollY > 70) {
        arrow.style['display'] = 'block'
      } else {
        arrow.style['display'] = 'none'
      }
    },
  },
  mounted () {
    this.getTodos()
  },
  created () {
    window.addEventListener('scroll', this.displayArrow)
  },
  destroyed () {
    window.removeEventListener('scroll', this.displayArrow)
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

.arrow-icon {
  margin: 10px 50px;
  padding: 10px;
  background-color: royalblue;
  color: white;
  border-radius: 20px;
  box-shadow: 3px 3px 10px grey;
  z-index: 99;
  width: 40px;
  line-height: 40px;
  overflow: hidden;
  display: none;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 0;
}
</style>
