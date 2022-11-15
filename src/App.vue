<script setup>
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import { ref } from 'vue'

const todos = ref([
  { id: '1', todo: 'Learn Vue 3', completed: false },
  { id: '2', todo: 'Learn Vue Router', completed: false },
  { id: '3', todo: 'Learn Vue Composition API', completed: false },
])

const pushTodo = (todo) => {
  todos.value.push({
    id: Math.random().toString(16).slice(2),
    todo: todo,
    completed: false
  })
}

const deleteTodo = (id) => {
  console.log(id)
}
</script>

<template>
  <div class="flex flex-wrap justify-center">
    <AddTodo @push-todo="pushTodo" />
    <TodoList :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<style scoped>

</style>