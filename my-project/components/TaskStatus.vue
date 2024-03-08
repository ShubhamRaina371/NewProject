<template>
    <div :class="'status ' + status.color">
      <h2>{{ status.title }} ({{ status.tasks.length }})</h2>
      <div class="tasks">
        <task-card v-for="task in status.tasks" :key="task.id" :task="task" />
      </div>
      <button @click="addTask">New</button>
    </div>
  </template>
  
  <script>
  import TaskCard from '~/components/TaskCard.vue';
  
  export default {
    components: {
      TaskCard
    },
    props: ['status'],
    methods: {
      addTask() {
        const newTask = { id: Date.now(), title: 'New Task', description: '', status: this.status.title };
        this.status.tasks.push(newTask);
      }
    }
  };
  </script>
  
  <style scoped>
  .status {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  
  .tasks {
    margin-top: 10px;
  }
  
  .to-do {
    color: #ef2e2e; /* Red */
  }
  
  .in-progress {
    color: #c9c91f; /* Yellow */
  }
  button{
background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  }
  
  .done {
    color: #5f9f5f; /* Green */
  }
  </style>
  