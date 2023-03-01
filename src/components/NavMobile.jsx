import React, { useState } from "react";

const NavMobile = () => {

    const [ isMobile, setIsMobile ] = useState(true)

    const handleMenu = ()=> {
        setIsMobile(!isMobile)
    };

    return (
        <nav>
            {
            isMobile?
                <i className="fa-solid fa-bars bar-menu" onClick={handleMenu}></i>
            :
                <ul className='nav-mobile-container'>
                    <i className="fa-solid fa-xmark bar-menu" onClick={handleMenu}></i>
                    <li><a href='#' className="title-menu-mobile">Inicio</a></li>
                    <li><a href='#nosotros' className="title-menu-mobile">Nosotros</a></li>
                    <li><a href='#productos' className="title-menu-mobile">Productos</a></li>
                    <li><a href='#menu' className="title-menu-mobile">Menu de Alimentos</a></li>
                    <li><a href='#sucursales' className="title-menu-mobile">Sucursales</a></li>
                    <li><a href='#contacto' className="title-menu-mobile">Contáctanos</a></li>
                </ul>
            }
        </nav>
    );
};

export default NavMobile;