app.vue------------

<template>
  <div>
    <h1>Project AirTribe</h1>
    <task-status v-for="status in statuses" :key="status.id" :status="status" :statuses="statuses" @update-task="updateTask" @delete-task="deleteTask" />
    <router-view />
  </div>
</template>

<script>
import TaskStatus from '~/components/TaskStatus.vue';
import TaskDetails from '~/components/TaskDetails.vue';
import TaskCard from '~/components/TaskCard.vue';

export default {
  components: {
    TaskStatus,
    TaskDetails,
    TaskCard
  },
  data() {
    return {
      statuses: [
        { id: 1, title: 'To Do', tasks: [], color: 'to-do' },
        { id: 2, title: 'In Progress', tasks: [], color: 'in-progress' },
        { id: 3, title: 'Completed', tasks: [], color: 'done' }
      ]
    };
  },
  
};
</script>

<style>
/* Add your styles here */
</style>
