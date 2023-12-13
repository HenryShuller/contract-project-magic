'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          password: '123',
          email: 'Jo@hnDoe',
          city: 'dapoh',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'ЮРА МАКС И ВАНЕК',
          password: '123',
          email: 'Jo@hn111Doe',
          city: 'ПИТЕРОК',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
