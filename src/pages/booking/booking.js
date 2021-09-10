const sair = rootElement.querySelector("#sair");
// const dropMenu = document.querySelector(".dpMenu")

sair.addEventListener('click', () => {
  console.log("the user left");
  navigation('/welcome');
});