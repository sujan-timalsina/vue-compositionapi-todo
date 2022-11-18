<script setup>
import { reactive, ref, watchEffect } from 'vue'

const props = defineProps(['editTodo'])
const emit = defineEmits(['pushTodo', 'updateTodo'])

const formData = reactive({
    todo: ''
})

const editTodoValue = ref(props.editTodo.todo)

watchEffect(() => {
    editTodoValue.value = props.editTodo.todo
});

const addTodo = () => {
    if (formData.todo) {
        emit('pushTodo', formData.todo)
        formData.todo = ''
    } else {
        console.log("not submitted")
    }
}

const updateTodo = () => {
    if (editTodoValue.value) {
        emit('updateTodo', props.editTodo.id, editTodoValue.value)
        editTodoValue.value = null
    } else {
        console.log("not updated")
    }
}
</script>
<template>
    <template v-if="Object.keys(editTodo).length !== 0">
        <form @submit.prevent="updateTodo" class="shadow-md rounded px-8 py-4 mx-3 my-2">
            <input type="text" v-model="editTodoValue"
                class="inline-block bg-gray-200 rounded-lg border-2 border-gray-300 p-2 m-2"
                placeholder="Update a todo..." />
            <button type="submit" class="bg-black p-2 text-white rounded m-2">Update Todo</button>
        </form>
    </template>
    <template v-if="Object.keys(editTodo).length === 0">
        <form @submit.prevent="addTodo" class="shadow-md rounded px-8 py-4 mx-3 my-2">
            <input type="text" v-model="formData.todo"
                class="inline-block bg-gray-200 rounded-lg border-2 border-gray-300 p-2 m-2"
                placeholder="Add a todo..." />
            <button type="submit" class="bg-black p-2 text-white rounded m-2">Add Todo</button>
        </form>
    </template>
</template>
<style>

</style>