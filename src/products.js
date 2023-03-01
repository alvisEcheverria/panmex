// Imagenes "Lo calientito "

import americano from './assets/img/menu/americano.png';
import capuchino from './assets/img/menu/capuchino.png';
import latte from './assets/img/menu/latte.png';
import express from './assets/img/menu/express.png';
import capuchinoSabor from './assets/img/menu/capuchino-sabor.png';
import chocolate from './assets/img/menu/chocolate.png';
import te from './assets/img/menu/te.png';

// Imagenes "Jugos Naturales"

import naranja from './assets/img/menu/naranja.png';
import mandarina from './assets/img/menu/mandarina.png';
import toronja from './assets/img/menu/toronja.png';
import detox from './assets/img/menu/detox.png';
import antigrasa from './assets/img/menu/antigrasa.png';
import amarillo from './assets/img/menu/amarillo.png';

// Imagenes "Las Aguas"

import jamaica from './assets/img/menu/jamaica.png';
import tamarindo from './assets/img/menu/tamarindo.png';
import horchata from './assets/img/menu/horchata.png';
import colaZero from './assets/img/menu/cocacola-zero.png';
import cocaCola from './assets/img/menu/cocacola.png';
import sprite from './assets/img/menu/sprite.png';
import fresca from './assets/img/menu/fresca.png';
import sidral from './assets/img/menu/sidral.png';
import ciel from './assets/img/menu/ciel.png';

// Imagenes "La Tortería"

import americana from './assets/img/menu/americana.png';
import chilaquiles from './assets/img/menu/chilaquiles.png';
import chorizo from './assets/img/menu/chorizo.png';
import diva from './assets/img/menu/diva.png';
import hawaiana from './assets/img/menu/hawaiana.png';
import tortaHuevo from './assets/img/menu/torta-huevo.png';
import tortaHuevoQueso from './assets/img/menu/torta-huevo-queso.png';
import tortaJamon from './assets/img/menu/torta-jamon.png';
import tortaJamonQueso from './assets/img/menu/torta-jamon-queso.png';
import tortaMilanesa from './assets/img/menu/torta-milanesa.png';
import milanesaQueso from './assets/img/menu/milanesa-queso.png';
import tortaRes from './assets/img/menu/torta-res.png';
import tortaResQueso from './assets/img/menu/torta-res-queso.png';
import tortaNorteña from './assets/img/menu/torta-norteña.png';
import tortaPierna from './assets/img/menu/torta-pierna.png';
import tortaPiernaQueso from './assets/img/menu/torta-pierna-queso.png';
import tortaRusa from './assets/img/menu/torta-rusa.png';
import tortaSalchicha from './assets/img/menu/torta-salchicha.png';
import tortaSalchichaQueso from './assets/img/menu/torta-salchicha-queso.png';
import tortaStar from './assets/img/menu/torta-star.png';

// Imagenes "Los Sandwiches"

import hamburguesa from './assets/img/menu/hamburguesa.png';
import hotDog from './assets/img/menu/hot-dog.png';
import sandwich from './assets/img/menu/sandwich.png';
import croissant from './assets/img/menu/croissant.png';
import hojaldra from './assets/img/menu/hojaldra.png';
import bollosRellenos from './assets/img/menu/bollos-rellenos.png';

// Imagenes "Los Desayunos"

import granola from './assets/img/menu/granola.png';
import enchiladas from './assets/img/menu/enchiladas.png';
import chilaquilesPollo from './assets/img/menu/chilaquiles-pollo.png';
import flautas from './assets/img/menu/flautas.png';
import sopesFrijol from './assets/img/menu/sopes-frijol.png';
import tamales from './assets/img/menu/tamales-oaxaqueños.png';
import huevosGusto from './assets/img/menu/huevos-gusto.png';
import sincronizadas from './assets/img/menu/sincronizadas.png';
import hotCakes from './assets/img/menu/hot-cakes.png';
import molletes from './assets/img/menu/molletes.png';
import milanesa from './assets/img/menu/milanesa.png';
import papas from './assets/img/menu/papas.png';
import ensaladas from './assets/img/menu/ensaladas.png';

const menu = [
    {
        products: 'Lo Calientito',
        productImg: "fa-solid fa-mug-hot",
        nameProduct: [
            {
                name: 'Café Americano',
                smallPrice: 25.00,
                midPrice: 29.00,
                bigPrice: 40.00,
                img: americano,
            },
            {
                name: 'Café Capuchino',
                midPrice: 35.00,
                bigPrice: 45.00,
                img: capuchino,
            },
            {
                name: 'Café Latte',
                midPrice: 35.00,
                bigPrice: 45.00,
                img: latte,
            },
            {
                name: 'Café Express',
                midPrice: 25.00,
                img: express,
            },
            {
                name: 'Café Capuchino de Sabores',
                midPrice: 35.00,
                bigPrice: 45.00,
                img: capuchinoSabor,
            },
            {
                name: 'Chocolate Caliente',
                midPrice: 35.00,
                bigPrice: 45.00,
                img: chocolate,
            },
            {
                name: 'Té',
                description: 'Manzanilla o hierbabuena',
                midPrice: 25.00,
                bigPrice: 30.00,
                img: te,
            }

        ]
    },
    {
        products: 'Jugos Naturales',
        productImg: "fa-solid fa-blender",
        nameProduct: [
            {
                name: 'Naranja',
                bigPrice: 35.00,
                img: naranja,
            },
            {
                name: 'Mandarina',
                description: 'Solo en temporada',
                bigPrice: 30.00,
                img: mandarina,
            },
            {
                name: 'Toronja',
                bigPrice: 35.00,
                img: toronja,
            },
            {
                name: 'Detox',
                description: 'Mango y manzana verde',
                bigPrice: 42.00,
                img: detox,
            },
            {
                name: 'El Antigrasa',
                description: 'Papaya, toronja y nopal',
                bigPrice: 42.00,
                img: antigrasa,
            },
            {
                name: 'Bomba Amarilla',
                description: 'Naranja, platano, mango, guayaba, toronja, mandarina, pera, manzana y avena',
                bigPrice: 42.00,
                img: amarillo,
            }
        ]
    },
    {
        products: 'Las Aguas',
        productImg: "fa-solid fa-bottle-water",
        nameProduct: [
            {
                name: 'Jamaica',
                smallPrice: null,
                midPrice: null,
                bigPrice: 15.00,
                img: jamaica,
            },
            {
                name: 'Tamarindo',
                midPrice: null,
                bigPrice: 15.00,
                img: tamarindo,
            },
            {
                name: 'Horchata',
                midPrice: null,
                bigPrice: 15.00,
                img: horchata,
            },
            {
                name: 'Coca Cola Zero',
                bigPrice: 25.00,
                img: colaZero,
            },
            {
                name: 'Coca Cola sin azúcar',
                midPrice: null,
                bigPrice: 25.00,
                img: cocaCola,
            },
            {
                name: 'Sprite',
                midPrice: null,
                bigPrice: 25.00,
                img: sprite,
            },
            {
                name: 'Fresca',
                midPrice: null,
                bigPrice: 25.00,
                img: fresca,
            },
            {
                name: 'Sidral Mundet',
                midPrice: null,
                bigPrice: 25.00,
                img: sidral,
            },
            {
                name: 'Ciel Embotellada',
                midPrice: null,
                bigPrice: 20.00,
                img: ciel,
            }
        ]
    },
    {
        products: 'La Tortería',
        productImg: "fa-solid fa-bread-slice",
        nameProduct: [
            {
                name: 'Americana',
                description: 'Salchicha, queso amarillo y queso oaxaca',
                smallPrice: null,
                midPrice: null,
                bigPrice: 80.00,
                img: americana,
            },
            {
                name: 'Chilaquiles',
                midPrice: null,
                bigPrice: 60.00,
                img: chilaquiles,
            },
            {
                name: 'Chorizo',
                midPrice: null,
                bigPrice: 60.00,
                img: chorizo,
            },
            {
                name: 'Diva',
                description: 'Chuleta, piña y queso oaxaca',
                bigPrice: 80.00,
                img: diva,
            },
            {
                name: 'Hawaiana',
                description: 'Jamón, piña y queso oaxaca',
                midPrice: null,
                bigPrice: 80.00,
                img: hawaiana,
            },
            {
                name: 'Huevo',
                midPrice: null,
                bigPrice: 60.00,
                img: tortaHuevo,
            },
            {
                name: 'Huevo con Queso',
                midPrice: null,
                bigPrice: 62.00,
                img: tortaHuevoQueso,
            },
            {
                name: 'Jamón',
                midPrice: null,
                bigPrice: 60.00,
                img: tortaJamon,
            },
            {
                name: 'Jamón con Queso',
                midPrice: null,
                bigPrice: 62.00,
                img: tortaJamonQueso,
            },
            {
                name: 'Milanesa de Pollo',
                midPrice: null,
                bigPrice: 70.00,
                img: tortaMilanesa,
            },
            {
                name: 'Milanesa de Pollo con Queso',
                midPrice: null,
                bigPrice: 78.00,
                img: milanesaQueso,
            },
            {
                name: 'Milanesa de Res',
                midPrice: null,
                bigPrice: 70.00,
                img: tortaRes,
            },
            {
                name: 'Milanesa de Res con Queso',
                midPrice: null,
                bigPrice: 78.00,
                img: tortaResQueso,
            },
            {
                name: 'Norteña',
                description: 'Pierna, chorizo y queso manchego',
                midPrice: null,
                bigPrice: 80.00,
                img: tortaNorteña,
            },
            {
                name: 'Pierna',
                midPrice: null,
                bigPrice: 60.00,
                img: tortaPierna,
            },
            {
                name: 'Pierna con Queso',
                midPrice: null,
                bigPrice: 65.00,
                img: tortaPiernaQueso,
            },
            {
                name: 'Rusa',
                description: 'Milanesa, pierna y queso panela',
                midPrice: null,
                bigPrice: 80.00,
                img: tortaRusa,
            },
            {
                name: 'Salchicha',
                midPrice: null,
                bigPrice: 60.00,
                img: tortaSalchicha,
            },
            {
                name: 'Salchicha con Queso',
                midPrice: null,
                bigPrice: 65.00,
                img: tortaSalchichaQueso,
            },
            {
                name: 'Star',
                description: 'Milanesa, chuleta y queso manchego',
                midPrice: null,
                bigPrice: 80.00,
                img: tortaStar,
            }
        ]
    },
    {
        products: 'Los Sándwiches',
        productImg: "fa-solid fa-burger",
        nameProduct: [
            {
                name: 'Hamburguesa con Queso Amarillo',
                description: 'Carne de Res, queso amarillo, cebolla, jitomate y lechuga romana',
                smallPrice: null,
                midPrice: null,
                bigPrice: 50.00,
                img: hamburguesa,
            },
            {
                name: 'Hot Dog',
                description: 'Salchicha de pavo con chile jalapeño, cebolla y jitomate',
                midPrice: null,
                bigPrice: 35.00,
                img: hotDog,
            },
            {
                name: 'Sándwich',
                description: 'Jamón con queso amarillo, cebolla, jitomate, lechuga romana y chiles en vinagre',
                midPrice: null,
                bigPrice: 55.00,
                img: sandwich,
            },
            {
                name: 'Croissant',
                description: 'Jamón con queso amarillo, cebolla, jitomate, lechuga romana y chiles en vinagre',
                bigPrice: 40.00,
                img: croissant,
            },
            {
                name: 'Hojaldra',
                description: 'Rellena de mole con pollo y queso',
                midPrice: null,
                bigPrice: 42.00,
                img: hojaldra,
            },
            {
                name: 'Bollos rellenos',
                description: 'Escoge tu relleno favorito: atún, jamón, pollo o mole con pollo',
                midPrice: null,
                bigPrice: 37.00,
                img: bollosRellenos,
            }
        ]
    },
    {
        products: 'Los Desayunos',
        productImg: "fa-solid fa-bacon",
        nameProduct: [
            {
                name: 'Charola de Frutas',
                description: 'Granola, miel de abeja, papaya, melón y plátano',
                smallPrice: null,
                midPrice: null,
                bigPrice: 45.00,
                img: granola,
            },
            {
                name: 'Enchiladas de Pollo en Salsa Verde o Roja',
                description: 'Acompañados con porción individual de frijoles refritos, cebolla y queso',
                midPrice: null,
                bigPrice: 70.00,
                img: enchiladas,
            },
            {
                name: 'Chilaquiles de Pollo en Salsa Verde o Roja',
                description: 'Acompañados con porción individual de frijoles refritos, cebolla y queso',
                midPrice: 59.00,
                bigPrice: 69.00,
                img: chilaquilesPollo,
            },
            {
                name: 'Flautas de Pollo',
                description: 'Tres flautas servidas en cama de lechuga romana con jitomate y cebolla',
                bigPrice: 70.00,
                img: flautas,
            },
            {
                name: 'Sopes de Frijol',
                description: 'Frijoles refritos con chorizo, queso y crema',
                midPrice: 60.00,
                bigPrice: 70.00,
                img: sopesFrijol,
            },
            {
                name: 'Tamales oaxaqueños o de maíz, verdes o rojos',
                description: 'En hoja de platano',
                midPrice: null,
                bigPrice: 35.00,
                img: tamales,
            },
            {
                name: 'Huevos al gusto',
                description: 'Revueltos, estrellados, fritos o rancheros',
                midPrice: null,
                bigPrice: 50.00,
                img: huevosGusto,
            },
            {
                name: 'Sincronizadas',
                description: 'Jamón de pierna o pavo y queso manchego en tortilla de harina',
                midPrice: null,
                bigPrice: 55.00,
                img: sincronizadas,
            },
            {
                name: 'Hot Cakes',
                description: 'Dos hotcakes con miel de maple o abeja',
                midPrice: null,
                bigPrice: 50.00,
                img: hotCakes,
            },
            {
                name: 'Molletes',
                description: 'De jamón o tocino',
                midPrice: null,
                bigPrice: 50.00,
                img: molletes,
            },
            {
                name: 'Milanesa Asada',
                midPrice: null,
                bigPrice: 66.00,
                img: milanesa,
            },
            {
                name: 'Papas a la Francesa',
                midPrice: null,
                bigPrice: 30.00,
                img: papas,
            },
            {
                name: 'Ensaladas',
                description: 'Atún, pollo y jamón',
                midPrice: null,
                bigPrice: 65.00,
                img: ensaladas,
            }
        ]
    }
]

export default menu;