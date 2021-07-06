import {
  iconActiveTemplate,
  iconNonActiveTemplate,
} from '../views/templates/template-creator';

const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, { button, drawer });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, { button, drawer });
    });
  },

  _toggleDrawer(event, { button, drawer }) {
    const active = drawer.classList.contains('mobile-nav-show');

    event.stopPropagation();

    drawer.classList.toggle('mobile-nav-show');
    button.classList.toggle('mobile-nav-button-active');
    if (active) {
      button.innerHTML = iconActiveTemplate;
    } else {
      button.innerHTML = iconNonActiveTemplate;
    }
  },

  _closeDrawer(event, { button, drawer }) {
    event.stopPropagation();

    drawer.classList.remove('mobile-nav-show');
    button.classList.remove('mobile-nav-button-active');
    button.innerHTML = iconActiveTemplate;
  },
};

export default DrawerInitiator;
