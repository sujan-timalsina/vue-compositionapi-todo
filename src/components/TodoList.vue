<script setup>
import { computed } from 'vue'

const props = defineProps({
    todos: Array,
    status: String
})

const ifTodoExist = computed(() => {
    return props.todos.length !== 0
})

const emit = defineEmits(['deleteTodo'])
</script>

<template>
    <div v-if="ifTodoExist" class="shadow-md rounded px-8 py-4 m-2">
        <ul>
            <li class="text-center text-xl">{{ status }} Todo List</li>
            <li v-for="todo in todos" :key="todo.id"
                class="flex flex-wrap justify-center items-center border-2 border-grey px-8 py-2 m-auto">
                <div class="m-2 w-40 text-center">{{ todo.todo }}</div>
                <input type="checkbox" class="w-6 h-6 m-2 rounded" v-model="todo.completed">
                <div>
                    <button class="bg-purple-500 p-2 text-white rounded m-2">Edit</button>
                    <button class="bg-red-500 p-2 text-white rounded m-2"
                        @click="$emit('deleteTodo', todo.id)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
    <div v-else class="shadow-md rounded px-8 py-4 m-2">
        <p class="text-red-500">No {{ status }} todos yet!</p>
    </div>
</template>

<style scoped>

</style>