import { useEffect, useState } from 'react'
import Labels from './components/Labels'
import Contacto from './components/Contacto'
import Inicio from './components/Inicio'
import Menu from './components/Menu'
import Nosotros from './components/Nosotros'
import Productos from './components/Productos'
import Sucursales from './components/Sucursales'
import './styles/style.css'

/**** Bakery Labels *****/

import bakery1960 from './assets/img/bakery-1960.png';
import bakerySweet from './assets/img/bakery-sweet.png';
import bakeryQuality from './assets/img/bakery-quality.png';
import bakeryEco from './assets/img/bakery-eco.png';
import bakeryFresh from './assets/img/bakery-fresh.png';
import bakeryOrganic from './assets/img/bakery-organic.png';

/**** Delivery Labels *****/

import rappiLogo from './assets/img/rappi-logo.png';
import uberEats from './assets/img/uber-eats.png';
import didiLogo from './assets/img/didi-logo.png';

/**** Designed by logo*****/

import aeLogo from './assets/img/logo-ae.png'
import MainNav from './components/MainNav'
import NavMobile from './components/NavMobile'

function App() {

  const bakeryImgs = [ 
    {
      logo: bakery1960
    },
    {
      logo: bakerySweet
    },
    {
      logo: bakeryQuality
    },
    {
      logo: bakeryEco
    },
    {
      logo: bakeryFresh
    }, 
    {
      logo: bakeryOrganic
    }
  ];

  const deliveryImgs = [ 
    { 
      logo: rappiLogo,
      link: 'https://www.rappi.com.mx/restaurantes/delivery/1917-panmex'
    },
    {
      logo: uberEats
    },
    {
      logo: didiLogo
    }
  ];

  return (
    <>
      <header>
        <MainNav/> 
        <NavMobile/>
      </header>
      <main className="App">
        <Inicio/>
        <Nosotros/>
        <Labels imgs={bakeryImgs}/>
        <Productos/>
        <Menu/>
        <Sucursales/>
        <Contacto/>
        <Labels imgs={deliveryImgs}/>
      </main>

      <footer>
        <p>PANMEX - All rights reserved ©</p>
        <div className='developer-container'>
          <a href='https://alvisecheverria.netlify.app' target='_blank'>Designed and developed by <span className='separator'>|</span> Alvis Echeverria</a>
          <img className='ae-logo' src={aeLogo} alt="logo-developer" />
        </div>
      </footer>
    </>
  )
}

export default App
