import { navigation } from '../../routes.js';



rootElement.innerHTML = container;

const proximo = rootElement.querrySelector('#proximo');

proximo.addEventListener('Click', () => {
    navigation('/booking')
})