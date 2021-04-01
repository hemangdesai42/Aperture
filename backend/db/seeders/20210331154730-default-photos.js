'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      { photo: 'https://images.unsplash.com/photo-1568841692931-2b39f61efaa5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date()},
      { photo: 'https://images.unsplash.com/photo-1568841374176-dc8f8778215f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568841401842-137343ee0db2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568841401859-c9e7582a09c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568841445496-b2492cacace5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568841318602-46b9b5bf3240?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1554835989-250250b7416d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568298901808-a89f6e9aaa6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568298940549-2a54510609a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568298933858-c027eb8cbf30?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1568298930350-e1125b0fbfb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1554835998-3cfaa1952b21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1554836427-b41bea79e2ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { photo: 'https://images.unsplash.com/photo-1554836112-694ac412be56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', albumId: 1, userId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};