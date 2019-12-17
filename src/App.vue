<template>
  <div id="app">
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" ref="taskInput" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <strike v-if="todo.done">
          {{ todo.task }}
        </strike>
        <span v-else>
          {{ todo.task }}
        </span>
        <button @click="done(todo.id)">done</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      newTask: '',
      todos: []
    }
  },

  created() {
    // Load from localStorage
    this.todos = JSON.parse(localStorage.getItem('todos')) || []
  },

  methods: {
    addTask() {
      this.todos.push({
        id: this.todos.length + 1,
        task: this.newTask,
        done: false
      })

      this.newTask = ''
      this.saveTodos()
    },

    done(id) {
      // Find `todo` item
      const todoIndex = this.todos.findIndex(todo => todo.id === id)
      const todo = this.todos[todoIndex]

      // Toggle `done` status
      todo.done = !todo.done

      this.todos.splice(todoIndex, 1, todo)
      this.saveTodos()
    },

    saveTodos() {
      // Save to localStorage
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
}
</script>

<style></style>
