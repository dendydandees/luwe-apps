import RestaurantList from '../views/pages/restaurant-list';
import DetailRestaurant from '../views/pages/detail-restaurant';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': RestaurantList, // default page
  '/detail/:id': DetailRestaurant,
  '/favorite': FavoriteRestaurant,
};

export default routes;
