<template>
    <div class="details">
      <h2>Edit Task</h2>
      <input type="text" v-model="editedTask.title" placeholder="Title" />
      <select v-model="editedTask.status">
        <option v-for="status in statuses" :key="status.id">{{ status.title }}</option>
      </select>
      <textarea v-model="editedTask.description" placeholder="Description"></textarea>
      <button @click="updateTask" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Update</button>
      <button @click="deleteTask" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['task', 'statuses'],
    data() {
      return {
        editedTask: {}
      };
    },
    mounted() {
      // Clone the task object to prevent mutation of the original task
      this.editedTask = { ...this.task };
    },
 
  };
  </script>
  
  <style scoped>
  .details {
    padding: 20px;
  }
  </style>
  