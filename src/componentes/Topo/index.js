import React from 'react'
import './style.css'

export default function Topo() {
 return (
  <header>
   <nav className="secao-topo">
    <div className="logo">
     <img
      src="assets/logo.png"
      title="medicamento"
      alt="imagem de um óculos à direita e o nome da ótica à esquerda"
    />
    </div>

    <div className="nav-list">
     <ul>
      <li className="nav-item">
       <a href="#produtos" className="nav-link">
        PRODUTOS
       </a>
      </li>
      <li className="nav-item">
       <a href="#sobre" className="nav-link">
        SOBRE
       </a>
      </li>
      <li className="nav-item">
       <a href="#contato" className="nav-link">
        CONTATO
       </a>
      </li>
     </ul>
    </div>

    <div className="mobile-menu-icon">
     <button onClick={handleClick}>
                     <img src="assets/menu_white_36dp.svg" alt="" className='icon' />
     </button>
    </div>
   </nav>

   <div className="mobile-menu">
    <ul>
     <li className="nav-item">
      <a href="#produtos" className="nav-link">
       PRODUTOS
      </a>
     </li>
     <li className="nav-item">
      <a href="#sobre" className="nav-link">
       SOBRE
      </a>
     </li>
     <li className="nav-item">
      <a href="#contato" className="nav-link">
       CONTATO
      </a>
     </li>
    </ul>

    <div className="button">
     <button>
      <img src="assets/menu_white_36dp.svg" alt="" />
     </button>
    </div>
   </div>
  </header>
 )
}

function handleClick() {
 let menuMobile = document.querySelector('.mobile-menu')
 if (menuMobile.classList.contains('open')) {
     menuMobile.classList.remove('open')
     document.querySelector('.icon').src ="assets/menu_white_36dp.svg"
 } else {
     menuMobile.classList.add('open')
     document.querySelector('.icon').src = "assets/close_white_36dp.svg"

 }
}
