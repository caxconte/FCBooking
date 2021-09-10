const proximo = document.querySelector('#btnProx');
proximo.addEventListener('click', () => {

    let empresas = document.querySelectorAll(".checkbox");

    let nome = [empresas[0].checked, empresas[1].checked];

    if (nome[0] == true) {
        console.log("Matriz");

    } else if (nome[1] == true) {
        console.log("Filial");

    } else {
        console.log("como caralhos vc fez isso?");
    }

});