<template>
  <div id="app">
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" ref="taskInput" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="todo in pending" :key="todo.id">
        <span>{{ todo.task }}</span>
        <button @click="finish(todo)">done</button>
      </li>
    </ul>
    <template v-if="completed.length">
      <h4>Completed</h4>
      <ul>
        <li v-for="todo in completed" :key="todo.id">
          <span>{{ todo.task }}</span>
          <button @click="unfinish(todo)">done</button>
        </li>
      </ul>
    </template>
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

  computed: {
    pending() {
      return this.todos.filter(todo => !todo.done)
    },

    completed() {
      return this.todos.filter(todo => todo.done)
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

    finish(todo) {
      todo.done = true

      this.saveTodos()
    },

    unfinish(todo) {
      todo.done = false

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
