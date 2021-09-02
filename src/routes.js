import { Login } from "./pages/authentication/login";


export const routeRender = () => {
  const elementRoute = document.querySelector('#root');
  const auth = firebase.auth();
  let path = window.location.pathname;

  const routes = {
    '/': Login,
    // '/login': Login,
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

};

window.addEventListener('load', routeRender);
window.addEventListener('popstate', routeRender);

const navigation = (path, state = {}) => {
  window.history.pushState(state, null, path);

  const popStateEvent = new PopStateEvent('popstate', { state });
  dispatchEvent(popStateEvent);
};
