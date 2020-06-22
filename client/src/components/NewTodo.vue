<template>
  <div class='new-todo'>
    <h3>Add a Todo</h3>
    <form>
      <input
        class='input'
        type='text'
        v-model='name'
        placeholder='what do you want to do today? ⏱'
        @focus='clearMsg'
      />
    <button
      type='button'
      @click='addTodo'
      class="btn"
      :disabled='this.name.length === 0'
    >Create Todo</button>
    </form>
    <div v-if='success' class='success msg'>Successfully added todo</div>
    <div v-if='failure' class='failure msg'>Try adding todo again</div>
  </div>
</template>

<script>
import TodoService from '../api/todo.api'
export default {
  name: 'NewTodo',
  data () {
    return {
      name: '',
      success: false,
      failure: false
    }
  },
  methods: {
    addTodo(e) {
      if (e) e.preventDefault()
      let todo = {
        name: this.name,
        done: false,
      }
      TodoService.createTodo(todo)
        .then(() => {
          this.$emit('added-new-todo')
          this.clearInput()
          this.success = true
          this.failure = false
        })
        .catch(err => {
          alert(err)
          this.success = false
          this.failure = true
        })
    },
    clearInput() {
      this.name = ''
    },
    clearMsg() {
      this.success = false
      this.failure = false
    }
  }
}
</script>

<style scoped>
.new-todo {
  padding: 100px 0;
  height: 80vh;
}

.btn {
  padding: 5px 10px;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  background-color: white;
  color: royalblue;
  border: solid 1px royalblue;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  outline: none;
}

.btn:disabled {
  cursor: auto;
  background-color: lightgray;
  color: gray;
  border: none;
}

.btn:hover:enabled {
  color: white;
  background-color: royalblue;
  cursor: pointer;
}

.input {
  padding: 8px 10px;
  margin: 5px;
  width: 280px;
  text-align: center;
  border: none;
  box-shadow: 3px 3px 10px 1px gray;
  border-radius: 15px;
  outline: none;
}

.input:focus::-webkit-input-placeholder {
  color: transparent;
}

.msg {
  padding: 10px;
  margin: 10px 0;
}

.success {
  color: #26a69a;
}

.failure {
  color: red;
}
</style>