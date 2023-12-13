'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


      await queryInterface.bulkInsert('UserCards', [{
        userId: 1,
        cardId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        cardId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        cardId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});

  },

  async down (queryInterface, Sequelize) {
  

     await queryInterface.bulkDelete('UserCards', null, {});
 
  }
};
