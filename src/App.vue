<template>
  <div id="app">
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" ref="taskInput" />
      <button type="submit">Add</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.task }}
        <button>done</button>
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

  methods: {
    addTask() {
      /* eslint-disable no-console */
      console.log(this.newTask)

      this.todos.push({
        id: this.todos.length + 1,
        task: this.newTask,
        completed: false
      })

      this.newTask = ''
    }
  }
}
</script>

<style></style>
