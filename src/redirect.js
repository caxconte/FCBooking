const buttom = document.querySelector("#goToLogin");

buttom.addEventListener('click', () => {
    console.log("gone to login page");
    location.href = "pages/autenticacao/login.html"; //redireciona para a pagina de bem vindo
})