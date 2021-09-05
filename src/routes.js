import { Login } from "./pages/authentication/login.js";
import { Booking } from "./pages/booking/booking.js";
import { Welcome } from "./pages/onboarding/bemvindo.js";

export const routeRender = () => {
  const elementRoute = document.querySelector('#root');
  let path = window.location.pathname;

  const routes = {
    '/': Login,
    '/login': Login,
    '/booking': Booking,
    '/welcome': Welcome,
  };

  // auth.onAuthStateChanged((user) => {

  //   if (!user && (path !== '/signup' || path !== '/login')) {
  //     window.history.replaceState(null, null, path);
  //   };
  //   if (user && (path === '/' || path === '/login' || path === '/signup')) {
  //     path = '/feed';
  //     window.history.replaceState(null, null, path);
  //   };
  //   if (!user && (path === '/booking')) {
  //     path = '/login';
  //     window.history.replaceState(null, null, path);
  //     // window.location.reload();
  //   };

  elementRoute.innerHTML = '';
  elementRoute.appendChild(routes[path]());

  // });
  
}

window.addEventListener('load', routeRender);
window.addEventListener('popstate', routeRender);

export const navigation = (path, state = {}) => {
  window.history.pushState(state, null, path);

  const popStateEvent = new PopStateEvent('popstate', { state });
  dispatchEvent(popStateEvent);
};
