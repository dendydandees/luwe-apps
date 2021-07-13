const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#content');
  I.see('Anda belum menambahkan restoran favorit Anda !', 'p');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('#content');
  I.see('Anda belum menambahkan restoran favorit Anda !', 'p');

  I.amOnPage('/');

  I.seeElement('#list a');
  const firstRestaurant = locate('#list a').first();
  const firstRestaurantName = await I.grabTextFrom('#resto-name');
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#list a');
  const favoriteRestaurantName = await I.grabTextFrom('#resto-name');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});
