export function writeStatic(){
    const javascriptLogo = '/javascriptNadiDuno.png'
    document.querySelector('#app').innerHTML = `
    <div>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logoJS" alt="JavaScript logo" />
        </a>
        <h1>Implementando Features de ECMAScript 2015 ES6!</h1>
        <h2>Programação para iniciantes</h2>
        <span>
        Projeto feito em Vite
        </span>
        <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logoVite" alt="Vite logo" />
        </a>
    </div>
    `
}

