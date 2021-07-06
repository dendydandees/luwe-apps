import 'regenerator-runtime'; /* for async await transpile */
import 'normalize.css';
import '../styles/main.css';
import data from '../DATA.json';

window.addEventListener('DOMContentLoaded', () => {
  // mobile navigation bar
  document.querySelector('#mobile-nav-button').addEventListener('click', () => {
    const mobileNavButton = document.querySelector('#mobile-nav-button');
    const mobileNav = document.querySelector('#mobile-nav');
    const active = mobileNav.classList.contains('mobile-nav-show');

    mobileNav.classList.toggle('mobile-nav-show');
    mobileNavButton.classList.toggle('mobile-nav-button-active');
    if (active) {
      mobileNavButton.innerHTML = `<span class="iconify" data-icon="system-uicons:menu-hamburger" data-inline="false" data-width="40px" data-height="40px" style="color: #fff;" ></span>`;
    } else {
      mobileNavButton.innerHTML = `<span class="iconify" data-icon="mdi:close" data-inline="false" style="color: #845EC2;" data-width="40px" data-height="40px"></span>`;
    }
  });

  // content
  for (let index = 0; index < data.restaurants.length; index++) {
    const element = data.restaurants[index];
    const { name, pictureId, city, description, rating } = element;
    const content = `<a href="#" title="${name}">
        <img src="${pictureId}" alt="${name}">
        <div id="list-content">
          <div>
              <p id="city">${city}</p>
              <p id="rating">Rating : ${rating}</p>
          </div>
          <h3 id="resto-name">${name}</h3>
          <p id="desc">
              ${description}
          </p>
          <button role="link" href="#">Lihat Restoran</button>
        </div>
    </a>`;

    document.querySelector('#list').insertAdjacentHTML('beforeend', content);
  }

  // footer
  const date = new Date();

  document.querySelector(
    '.footer',
  ).innerHTML = `Copyright &#169; ${date.getUTCFullYear()} - Luwe`;
});
