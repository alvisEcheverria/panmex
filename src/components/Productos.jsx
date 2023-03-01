import React from 'react';
import pan from '../assets/img/pan.png';
import pastel from '../assets/img/pastel.png';
import gelato from '../assets/img/gelato.png';

const Productos = () => {
    
    const products = [
        {
            name: 'Panaderia',
            description: 'PanMex es la única panadería en MÉXICO que sigue elaborando mas de 70 variedades de pan algunas con origenes desde la colonia española. El pan de PanMex es el único pan dulce en MÉXICO que mantiene la tradición de ser elaborado artesanalmente, utilizar ingredientes naturales sin ningun conservador y el cual mantiene un sabor, tamaño y presentación de un pan gourmet.',
            img: pan
        },
        {
            name: 'Pasteleria',
            description: 'No puede faltar en esos momentos especiales un pastel de PanMex, bellamente decorados y con el sabor de tradición que solo una manufactura artesanal y los mejores ingredientes le pueden dar, los pasteles de PanMex son una delicia, familiares o individuales todo para que disfrutes un delicioso momento a tus gusto. ¡Celebra con el exquisito sabor tradicional de un pastel de PanMex!',
            img: pastel
        },
        {
            name: 'Helados',
            description: 'Nuestro Helado Italiano Gourmet Centurión es mejor que un helado, hechos a mano, tienen una textura suave y un sabor más rico debido a nuestros ingredientes sin igual. No encontrará un mejor Gelato en México, se lo garantizamos. Una experiencia italiana de un helado hecho de manera artesanal, no sólo es una crema de hielo gourmet italiano, sino también una forma de arte.',
            img: gelato
        }
    ]

    return (
        <section id='productos'>
            <h2>Productos</h2>
            <ul className='card-container'>
                {
                    products.map(product =>(
                        <li className='card'>
                            <img src={product.img} alt="producto" />
                            <h3>{product.name}</h3>
                            <p className='paragraph-product'>{product.description}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    );
};

export default Productos;