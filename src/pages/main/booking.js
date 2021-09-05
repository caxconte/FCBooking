export const Booking = () => {
  const rootElement = document.createElement("section");
  rootElement.setAttribute('class', 'headerContent')

  const container = `
    <div class="menu">
      <nav class="menuLinks">
        <button class="botao" href="#">
          <img src="/booking/images/perfil.svg" alt="Acesse seu perfil">
        </button>

        <img src="/booking/images/FCbookinglogo.svg" alt="Logo FCBooking">

        <button id="sair" onClick="reply_click(this.id)" class="botaoSair" href="#">
          <img src="/booking/images/perfil.svg" alt="Sair do seu perfil">
        </button>
      </nav >
    </div>
  `;

  rootElement.innerHTML = container;

  return rootElement;
  
};