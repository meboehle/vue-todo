import axios from 'axios'
import {baseURL} from './index'

export default {
  getTodos () {
    return axios.get(baseURL)
      .then(res => res.data)
      .catch(err => console.log(err))
  },
  updateTodo(id, todo) {
    return axios.patch(`${baseURL}/${id}`, todo)
      .then(res => res.data)
      .catch(err => {throw err})
  },
  createTodo(todo) {
    return axios
      .post(baseURL, todo)
      .then(res => res.data)
      .catch(err => {throw err})
  },
  deleteTodo(id) {
    return axios
      .delete(`${baseURL}/${id}`)
      .then(res => res.data)
      .catch(err => {throw err})
  }
}