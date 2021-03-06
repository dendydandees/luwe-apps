import 'regenerator-runtime'; /* for async await transpile */
import 'normalize.css';
import '../styles/main.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import serviceWorkerRegister from './utils/service-worker-register';

const app = new App({
  button: document.querySelector('#mobile-nav-button'),
  drawer: document.querySelector('#mobile-nav'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
});
