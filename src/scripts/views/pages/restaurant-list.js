import RestaurantSource from '../../data/restaurant-source';
import { restaurantListTemplate } from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
      <hero-element></hero-element>
      <section id="content">
          <h2>Restoran di sekitar mu</h2>
          <p id="loading">Memuat ...</p>
          <div id="list">
          </div>
      </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurantsContainer = document.querySelector('#list');

    try {
      const restaurants = await RestaurantSource.restaurantList();

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += restaurantListTemplate(restaurant);
      });
    } catch (error) {
      document.querySelector(
        '#content',
      ).innerHTML += `<p style="text-align:center">Gagal memuat, silahkan refresh halaman !</p>`;
    } finally {
      document.querySelector('#loading').remove();
    }
  },
};

export default RestaurantList;
