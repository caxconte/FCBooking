import { navigation } from '../../routes.js';

export const Welcome = () => {
  const rootElement = document.createElement('section')

  const container = `
    <h1>Bem Vindo</h1>
    <input class="inputEnviar" type="button" value="Entrar" id="goToLogin">
  `;

  rootElement.innerHTML = container;

  const goToLogin = rootElement.querySelector('#goToLogin');

  goToLogin.addEventListener('click', () => {
    navigation('/login');
  })

  return rootElement;
  
}