import { navigation } from "../../routes.js";

export const Login = () => {
  const rootElement = document.createElement('section');
  rootElement.setAttribute('id', 'autenticacao');

  const container = `
    <form class="camposLogin" action="">
      <input class="inputEmail" type="email" name="" id="emailAutenticacao" placeholder="Email">

      <input class="inputSenha" type="password" name="" id="senhaAutenticacao" placeholder="Senha">

      <input class="inputEnviar" type="submit" value="Entrar" id="enviarAutenticacao">
    </form>
  `;

  rootElement.innerHTML = container;

  // pega o input submit
  const enviar = rootElement.querySelector('#enviarAutenticacao');

  // verifica o click no submit
  enviar.addEventListener('click', () => {  
    // pega o input de email
    const email = rootElement.querySelector('#emailAutenticacao');
    console.log(email.value);
    // pega o input de senha
    const senha = rootElement.querySelector('#senhaAutenticacao');
    console.log(senha.value);

    // chama a função pra fazer login
    // createUser(email.value, senha.value);
    navigation('/booking');
  });

  return rootElement;

}
