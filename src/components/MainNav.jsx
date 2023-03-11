import React, { useEffect, useState } from 'react';
import logo from '../assets/img/logo.webp'

const MainNav = () => {

    const [ selected, setSelected ] = useState('inicio');

    const sections = {
        inicio: 0,
        nosotros: 600,
        productos: 1700,
        menu: 2600,
        sucursales: 3300,
        contacto: 3900,
    };
  
    useEffect(()=>{

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const section = Object.keys(sections).find(
              (key, index) => scrollY >= sections[key] && sections[Object.keys(sections)[index + 1]] ? 
              scrollY < sections[Object.keys(sections)[index + 1]] : true
            );
            setSelected(section);
          };
          
        window.addEventListener('scroll', handleScroll);
  
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    },[]);

    return (
        <nav className="main-nav">
            <div className='nav-container'>
                <a href='#'>
                    <img 
                    className='logo' 
                    src={logo} 
                    alt="Logotipo de Panmex"/>
                </a>
                <ul className='nav'>
                    <li><a href='#' className={selected === "inicio" && "selected"}>Inicio</a></li>
                    <li><a href='#nosotros' className={selected === "nosotros" && "selected"}>Nosotros</a></li>
                    <li><a href='#productos' className={selected === "productos" && "selected"}>Productos</a></li>
                    <li><a href='#menu' className={selected === "menu" && "selected"}>Menu de Alimentos</a></li>
                    <li><a href='#sucursales' className={selected === "sucursales" && "selected"}>Sucursales</a></li>
                    <li><a href='#contacto' className={selected === "contacto" && "selected"}>Contáctanos</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default MainNav;