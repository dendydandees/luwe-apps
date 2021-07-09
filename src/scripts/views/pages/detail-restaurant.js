import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { restaurantDetailTemplate } from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `
      <section id="detail">
        <p id="loading">Memuat ...</p>
      </section>
      <div class="like" id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#detail');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    try {
      const restaurant = await RestaurantSource.restaurantDetail(url.id);
      restaurantContainer.innerHTML += restaurantDetailTemplate(restaurant);

      await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
    } catch (error) {
      restaurantContainer.innerHTML += '<p style="text-align:center">Gagal memuat, silahkan refresh halaman !</p>';
      likeButtonContainer.remove();
    } finally {
      document.querySelector('#loading').remove();
    }
  },
};

export default DetailRestaurant;
