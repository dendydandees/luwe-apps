import API_ENDPOINT from '../globals/api-endpoint';

const RestaurantSource = {
  async restaurantList() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();

    return responseJson.restaurants;
  },

  async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();

    return responseJson.restaurant;
  },
};

export default RestaurantSource;
