const sair = document.querySelector("#sair");
const dropMenu = document.querySelector(".dpMenu")

sair.addEventListener('click', () => {
    console.log("the user left");
    location.href = "/src/index.html"; //redireciona para a pagina de bem vindo
})