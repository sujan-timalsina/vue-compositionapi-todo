<script setup>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import { ref, computed } from 'vue'

const todos = ref([
  { id: '1', todo: 'Learn Vue 3', completed: false },
  { id: '2', todo: 'Learn Vue Router', completed: false },
  { id: '3', todo: 'Learn Vue Composition API', completed: false },
])

const editThisTodo = ref({})

const pendingTodos = computed(() => {
  return todos.value.filter(todo => todo.completed === false)
})

const completedTodos = computed(() => {
  return todos.value.filter(todo => todo.completed === true)
})

const pushTodo = (todo) => {
  todos.value.push({
    id: Math.random().toString(16).slice(2),
    todo: todo,
    completed: false
  })
}

const removeTodo = (id) => {
  const indexOfTodo = todos.value.findIndex(todo => todo.id === id)
  todos.value.splice(indexOfTodo, 1)
}

const toEditTodo = (id) => {
  const indexOfTodo = todos.value.findIndex(todo => todo.id === id)
  editThisTodo.value = todos.value[indexOfTodo]
}

const toUpdateTodo = (id, todo) => {
  const indexOfTodo = todos.value.findIndex(todo => todo.id === id)
  todos.value[indexOfTodo].todo = todo
  editThisTodo.value = {}
}
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <AddTodo @push-todo="pushTodo" :editTodo.sync="editThisTodo" @update-todo="toUpdateTodo" />
    <TodoList :todos="pendingTodos" @delete-todo="removeTodo" status="Pending" @edit-todo="toEditTodo" />
    <TodoList :todos="completedTodos" @delete-todo="removeTodo" status="Completed" @edit-todo="toEditTodo" />
  </div>
</template>

<style scoped>

</style>