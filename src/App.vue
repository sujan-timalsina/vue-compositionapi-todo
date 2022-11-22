<script setup>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import { ref, computed, watchEffect } from 'vue'

// const todos = ref([
//   { id: '1', todo: 'Learn Vue 3', completed: false },
//   { id: '2', todo: 'Learn Vue Router', completed: false },
//   { id: '3', todo: 'Learn Vue Composition API', completed: false },
// ])

const todos = ref(JSON.parse(localStorage.getItem("todos")))

const editThisTodo = ref({})

const pendingTodos = computed(() => {
  return todos.value.filter(todo => todo.completed === false)
})

const completedTodos = computed(() => {
  return todos.value.filter(todo => todo.completed === true)
})

const pushTodo = (todo) => {
  const newTodo = {
    id: Math.random().toString(16).slice(2),
    todo: todo,
    completed: false
  }

  // const savedTodo = JSON.parse(localStorage.getItem("todos"))
  // savedTodo.push(newTodo)
  todos.value.push(newTodo)

  localStorage.setItem("todos", JSON.stringify(todos.value))
}

const removeTodo = (id) => {
  const indexOfTodo = todos.value.findIndex(todo => todo.id === id)
  todos.value.splice(indexOfTodo, 1)
  localStorage.setItem("todos", JSON.stringify(todos.value))
}

const toEditTodo = (id) => {
  const indexOfTodo = todos.value.findIndex(todo => todo.id === id)
  editThisTodo.value = todos.value[indexOfTodo]
}

const toUpdateTodo = (id, todo) => {
  const indexOfTodo = todos.value.findIndex(todo => todo.id === id)
  todos.value[indexOfTodo].todo = todo
  localStorage.setItem("todos", JSON.stringify(todos.value))
  editThisTodo.value = {}
}

const toUpdateStatus = (id) => {
  const indexOfTodo = todos.value.findIndex(todo => todo.id === id)
  todos.value[indexOfTodo].status = !todos.value[indexOfTodo].status
  localStorage.setItem("todos", JSON.stringify(todos.value))
}
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <AddTodo @push-todo="pushTodo" :editTodo.sync="editThisTodo" @update-todo="toUpdateTodo" />
    <TodoList :todos="pendingTodos" @delete-todo="removeTodo" status="Pending" @edit-todo="toEditTodo"
      @update-status="toUpdateStatus" />
    <TodoList :todos="completedTodos" @delete-todo="removeTodo" status="Completed" @edit-todo="toEditTodo"
      @update-status="toUpdateStatus" />
  </div>
</template>

<style scoped>

</style>