//pega o input submit
const enviar = document.querySelector('#enviarAutenticacao');

//verifica o click no submit
enviar.addEventListener('click', () => {
    //pega o input de nome
    const nome = document.querySelector('#nomeAutenticacao');
    const valorNome = nome.value;
    console.log(valorNome);

    //pega o input de email
    const email = document.querySelector('#emailAutenticacao');
    const valorEmail = email.value;
    console.log(valorEmail);

    //redirecionamento
    if (valorNome != "" && valorEmail != "") {
        location.href = '../booking/booking.html';
    }
});

