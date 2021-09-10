rootElement.innerHTML = container;

const goToLogin = rootElement.querySelector('#goToLogin');

goToLogin.addEventListener('click', () => {
    navigation('/login');
})

return rootElement;