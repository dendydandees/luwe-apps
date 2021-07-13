const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('#list a');
  const firstRestaurant = locate('#list a').first();
  const firstRestaurantName = await I.grabTextFrom('#resto-name');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#list a');
  const firstFavoriteRestaurant = locate('#list a').first();
  const favoriteRestaurantName = await I.grabTextFrom('#resto-name');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);

  I.click(firstFavoriteRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#content');
  I.see('Anda belum menambahkan restoran favorit Anda !', 'p');
});
