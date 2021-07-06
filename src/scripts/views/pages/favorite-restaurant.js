import FavoriteRestaurantIdb from '../../data/restaurant-idb';
import { restaurantListTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
      <section id="content">
          <h2>Restoran favorite mu</h2>
          <p id="loading">Memuat ...</p>
          <div id="list">
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#list');

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();

      if (restaurants.length === 0) {
        document.querySelector(
          '#content',
        ).innerHTML += `<p style="text-align:center">Anda belum menambahkan restoran favorit Anda !</p>
        `;
      } else {
        restaurants.forEach((restaurant) => {
          restaurantsContainer.innerHTML += restaurantListTemplate(restaurant);
        });
      }
    } catch (error) {
      document.querySelector(
        '#content',
      ).innerHTML += `<p style="text-align:center">Gagal memuat, silahkan refresh halaman !</p>`;
    } finally {
      document.querySelector('#loading').remove();
    }
  },
};

export default FavoriteRestaurant;
