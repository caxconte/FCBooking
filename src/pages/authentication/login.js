import { createUser } from "../../services/auth.js";

export const Login = () => {
  const rootElement = document.createElement('div');
  const container = `
    <input type="email" id="email"></input>
    <input type="password" id="password"></input>
  
    <button type="submit" id="submit"></button>
  `;
  rootElement.innerHTML = container;

  const email = rootElement.querySelector('#email');
  const password = rootElement.querySelector('#password');
  const submit = rootElement.querySelector('#submit');

  submit.addEventListener('click', () => {
    createUser(email, password);
    navigation('/main');
  })

  return rootElement;

}
