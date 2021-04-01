'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      { name: 'New York City', userId: 1, description: 'An album about NYC', createdAt: new Date(), updatedAt: new Date()}  
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};