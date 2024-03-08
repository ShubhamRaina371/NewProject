// nuxt.config.js

export default {
  // Other Nuxt.js configuration...

  // Configure router
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'task-details',
        path: '/task/:taskId',
        component: resolve(__dirname, 'path/to/TaskDetails.vue')
      })
    }
  }
}
