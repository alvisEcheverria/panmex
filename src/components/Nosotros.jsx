import React, { useState } from 'react';
import panadero from '../assets/img/panadero.webp'

const Nosotros = () => {
    
    const history = "En 1960, PANMEX inicio en una planta ubicada en la delegación Azcapotzalco en la Ciudad de México, sin venta al público y únicamente surtiendo los programas sociales del Gobierno Federal. “La Fábrica” como originalmente los socios se referían a esta planta, se instaló para hacer pan en general para lo cual se buscaron técnicos especializados en la materia. Es así que se comienza a facturar a las lecherías de la CEIMSA (Compañía Exportadora e Importadora Mexicana, S.A.), situación que se afianza en 1961 cuando se comienza a surtir al Instituto de Protección a la Infancia creado por la primera dama de México la Sra. Eva Zamano de López Mateos, esposa del Presidente Adolfo López Mateos. \n Este Instituto evolucionaría con el tiempo a lo que hoy en día se conoce como DIF (Desarrollo Integral de la Familia), al cual PANMEX prestó servicios durante 45 años. En 1973 se inicia una etapa de innovación en donde se abre la línea de galletería con la marca Galletas Gubis para su venta en autoservicios, este negocio colateral progresó durante algunos años más. Para 1985 ya con 25 años de experiencia se decide abrir un nuevo concepto de panadería fina con venta al público y es así que se comienza la construcción de la primera tienda ubicada en el sur de la Ciudad de México dentro de la colonia Jardines del Pedregal. En este nuevo concepto de pan dulce 100% artesanal, se utilizarían solo los mejores ingredientes y la más alta calidad. Fue tal la aceptación por parte de nuestros clientes hacia el pan que se decide hacer un gran esfuerzo y en el año de 1990 se abre una segunda sucursal con este mismo concepto más al sur de la Ciudad de México, esta vez en la Avenida San Fernando # 236, con excelentes resultados. Es así que después de un periodo de gran estabilidad en 1998 se abre la tercera tienda dentro de la Ciudad de México, esta vez en un formato de plaza comercial abierta ubicada en la Calzada de Tlalpan, al sur de la ciudad y esta vez con un gran éxito para PANMEX. En el año 2000 con el cambio del milenio, inicia también una etapa de grandes cambios para PANMEX ya que se decide abrir varias sucursales en formato de tienda mediana, así como abrir la venta de pan y pasteles a concesiones externas. Para comenzar el año 2000 se abre la primera panadería y pastelería dentro de un centro comercial con la introducción de los servicios de cafetería gourmet y de lunch express; Plaza Inn resultó ser otro gran acierto para la empresa. En los siguientes 7 años se abrirían 4 sucursales más cubriendo las zonas de alto poder adquisitivo de la Ciudad de México. Actualmente la empresa sigue en crecimiento y consolidación, formando en 2010 un grupo corporativo en la industria alimentaria.";
    
    const cutStory = history.split("\n").slice(0, 1).join("\n");

    const [ text, setText ] = useState(false);

    return (
        <section id='nosotros'>
            <div className="item-a">
                <h2>Sobre Nosotros</h2>
                <h3>Historia</h3>
                {
                    text?
                    <p>{history}<span className='show-text' onClick={()=> setText(false)}> Ver Menos...</span></p>
                    :
                    <p>{cutStory}<span className='show-text' onClick={()=> setText(true)}> Ver Más...</span></p>
                }
                <h3>Misión</h3>    
                <p>Hacer productos artesanales típicos mexicanos que por su calidad sean reconocidos entre nuestros consumidores y por nuestros clientes,  a su vez retribuir a la sociedad generando empleos para personas con capacidades diferentes.</p> 
                <h3>Visión</h3>
                <p>Proveer al consumidor mexicano que habita tanto en territorio nacional como internacional de productos artesanales que incorporando nueva tecnología le transmita sus costumbres y tradiciones.</p>
            </div>
            <div className="item-b">
                <img className='nosotros-img' src={panadero} alt=""/>
            </div>
        </section>
    );
};

export default Nosotros;