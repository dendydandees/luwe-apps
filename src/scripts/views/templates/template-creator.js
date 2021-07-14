import CONFIG from '../../globals/config';

const iconActiveTemplate = '<span class="iconify" data-icon="system-uicons:menu-hamburger" data-inline="false" data-width="40px" data-height="40px" style="color: #fff;" ></span>';

const iconNonActiveTemplate = '<span class="iconify" data-icon="mdi:close" data-inline="false" style="color: #845EC2;" data-width="40px" data-height="40px"></span>';

const restaurantListTemplate = (restaurant) => {
  const {
    id, name, pictureId, city, rating, description,
  } = restaurant;

  return `<a href="${`/#/detail/${id}`}" title="${name}">
        <img data-src="${
  CONFIG.BASE_IMAGE_URL
}${pictureId}" alt="${name}" class="lazyload">
        <div id="list-content">
          <div>
              <p id="city">${city}</p>
              <p id="rating">Rating : ${rating}</p>
          </div>
          <h3 id="resto-name">${name}</h3>
          <p id="desc">
              ${description}
          </p>
          <button role="link" href="${`/#/detail/${id}`}">Lihat Restoran</button>
        </div>
    </a>`;
};

const restaurantDetailTemplate = (restaurant) => {
  const {
    name,
    pictureId,
    city,
    rating,
    description,
    customerReviews,
    categories,
    address,
    menus,
  } = restaurant;

  return `
  <div class="detail-container">
    <h2>${name}</h2>
    <img src="${CONFIG.BASE_IMAGE_URL}${pictureId}" alt="${name}">
  </div>
  <div id="description">
    <div class="detail-container">
      <h3>Rincian</h3>
      <p>${description}</p>
      <h4>Masakan</h4>
      <p>${categories.map((category) => category.name).join(', ')}</p>
      <h4>Menu Makanan</h4>
      ${menus.foods.map((food) => food.name).join(', ')}
      <h4>Menu Minuman</h4>
      ${menus.drinks.map((drink) => drink.name).join(', ')}
    </div>
    <div class="detail-container">
      <h3>Lokasi dan Kontak</h3>
      <h4>Kota</h4>
      <p>${city}</p>
      <h4>Alamat</h4>
      <p>${address}</p>
    </div>
  </div>
  <div class="detail-container">
    <h3>Penilaian dan Ulasan</h3>
    <p><b>Rating ${rating} <small>(${
  customerReviews.length
} Ulasan)</small></b></p>
    <div id="review-customer">
        ${customerReviews
    .slice(0, 5)
    .map(
      (review) => `<div>
            <small>Diulas pada ${review.date}</small>
            <p><b>${review.name}</b></p>
            <p>${review.review}</p>
          <hr>
          </div>`,
    )
    .join('')}
    </div>
  </div>
  `;
};

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <span class="iconify" data-icon="mdi:bookmark-outline" data-inline="false" style="color: #fff;" data-width="24px" data-height="24px"></span>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <span class="iconify" data-icon="mdi:bookmark" data-inline="false" style="color: #fff;" data-width="24px" data-height="24px"></span>
  </button>
`;

export {
  iconActiveTemplate,
  iconNonActiveTemplate,
  restaurantListTemplate,
  restaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
