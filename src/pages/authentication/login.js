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
});
// chama a função pra fazer login
// createUser(email.value, senha.value);