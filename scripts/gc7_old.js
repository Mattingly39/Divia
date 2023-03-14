import gcLogo from '../assets/imgs/gc7.svg'

(function gc7Nav() {
  document.querySelector('#gc7Nav').innerHTML = `
  <nav class="pl-1 flex justify-evenly  items-center border-b-4 py-1">
  <img src="${gcLogo}" class="logo" alt="GC logo" width="70px"/>
  <h1 class="pl-5 text-3xl grow">SuperQuizz</h1>
  <div class="pr-1">
    Accueil | Jeu
  </div>
  </nav>
  `
})()

export default gc7Nav
