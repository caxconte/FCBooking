export const Booking = () => {
  const rootElement = document.createElement("section");
  rootElement.setAttribute('class', 'headerContent')

  const container = `
    <div class="menu">
      <nav class="menuLinks">
        <ul>
          <li>
            <!--botao esquerda-->
            <button id="perfil" class="botao" href="#">
              <img src="images/perfil.svg" alt="Acesse seu perfil">
            </button>

            <ul class="dpMenu">
              <li><a href="#">Perfil</a></li>
              <li><a href="#">Agendamentos</a></li>
            </ul>
          </li>
          <li>
            <!--logo-->
            <img src="images/FCbookinglogo.svg" alt="Logo FCBooking">
          </li>
          <li>
            <!--botão esquerda-->
            <button id="sair" class="botaoSair" href="#">
                <img src="images/perfil.svg" alt="Sair do seu perfil">
            </button>
          </li>
        </ul>
      </nav>
    </div>
  `;

  rootElement.innerHTML = container;

  const sair = rootElement.querySelector("#sair");
  // const dropMenu = document.querySelector(".dpMenu")
  
  sair.addEventListener('click', () => {
    console.log("the user left");
    navigation('/welcome'); // redireciona para a pagina de bem vindo
  })

  return rootElement;
};