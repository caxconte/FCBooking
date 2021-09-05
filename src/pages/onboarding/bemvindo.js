export const Welcome = () => {
  const rootElement = document.createElement('section')

  const container = `
  <h1>AQUI É A PAGINA DE BEM VINDO</h1>
  `

  rootElement.innerHTML = container;

  return rootElement
}