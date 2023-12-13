'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Cards', [{
        name: 'карта1',
        img: 'https://cs9.pikabu.ru/post_img/big/2016/11/07/11/1478542846151758004.jpg',
        price: 'Jo@hn111Doe',
        newold: "new",
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'карта2',
        img: 'https://cs9.pikabu.ru/post_img/big/2016/11/07/11/1478542844111556438.jpg',
        price: 'Jo@hn111Doe',
        newold: "old",
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'карта3',
        img: 'https://cs9.pikabu.ru/post_img/big/2016/11/07/11/1478542850181825547.jpg',
        price: 'Jo@hn111Doe',
        newold: "new",
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});

  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('Cards', null, {});

  }
};
