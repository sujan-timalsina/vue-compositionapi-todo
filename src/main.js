import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", JSON.stringify([]))
}
createApp(App).mount('#app')