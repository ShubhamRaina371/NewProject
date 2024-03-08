TaskCard.vue-------------
<template>
    <router-link :to="'/task/' + task.id">
      <div class="task" draggable="true" @dragstart="dragStart">
        <h3>{{ task.title }}</h3>
      </div>
    </router-link>
  </template>
  
  <script>
  export default {
    props: ['task'],
    methods: {
      dragStart(event) {
        event.dataTransfer.setData('text/plain', JSON.stringify(this.task));
      }
    }
  };
  </script>
  
  <style scoped>
  .task {
    background-color: #f0f0f0;
    border: 1px solid #cbcbcb;
    padding: 10px;
    margin-bottom: 5px;
    cursor: pointer;
  }
  </style>
  