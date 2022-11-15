<script setup>
import { reactive } from 'vue'
const formData = reactive({
    todo: ''
})
const emit = defineEmits(['pushTodo'])
const addTodo = () => {
    if (formData.todo) {
        emit('pushTodo', formData.todo)
    } else {
        console.log("not submitted")
    }
}
</script>

<template>
    <form @submit.prevent="addTodo" class="shadow-md rounded px-8 py-4 mx-3">
        <input type="text" v-model="formData.todo"
            class="inline-block bg-gray-200 rounded-lg border-2 border-gray-300 p-2 m-2" placeholder="Add a todo..." />
        <button type="submit" class="bg-black p-2 text-white rounded m-2">Add Todo</button>
    </form>
</template>

<style>

</style>