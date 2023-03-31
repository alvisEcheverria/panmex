// Imagenes "Lo calientito "

import americano from './assets/img/menu/americano.webp';
import capuchino from './assets/img/menu/capuchino.webp';
import latte from './assets/img/menu/latte.webp';
import express from './assets/img/menu/express.webp';
import capuchinoSabor from './assets/img/menu/capuchino-sabor.webp';
import chocolate from './assets/img/menu/chocolate.webp';
import te from './assets/img/menu/te.webp';

// Imagenes "Jugos, aguas y refrescos"

import naranja from './assets/img/menu/naranja.webp';
import toronja from './assets/img/menu/toronja.webp';
import verde from './assets/img/menu/verde.webp';
import detox from './assets/img/menu/detox.webp';
import antigrasa from './assets/img/menu/antigrasa.webp';
import amarillo from './assets/img/menu/amarillo.webp';
import tamarindo from './assets/img/menu/tamarindo.webp';
import horchata from './assets/img/menu/horchata.webp';
import colaZero from './assets/img/menu/cocacola-zero.webp';
import cocaCola from './assets/img/menu/cocacola.webp';
import sprite from './assets/img/menu/sprite.webp';
import fresca from './assets/img/menu/fresca.webp';
import sidral from './assets/img/menu/sidral.webp';
import ciel from './assets/img/menu/ciel.webp';

// Imagenes "La Tortería"

import americana from './assets/img/menu/americana.webp';
import chilaquiles from './assets/img/menu/chilaquiles.webp';
import chorizo from './assets/img/menu/chorizo.webp';
import diva from './assets/img/menu/diva.webp';
import hawaiana from './assets/img/menu/hawaiana.webp';
import tortaHuevo from './assets/img/menu/torta-huevo.webp';
import tortaHuevoQueso from './assets/img/menu/torta-huevo-conqueso.webp';
import tortaJamon from './assets/img/menu/torta-jamon.webp';
import tortaJamonQueso from './assets/img/menu/torta-jamon-queso.webp';
import tortaMilanesa from './assets/img/menu/torta-milanesa.webp';
import milanesaQueso from './assets/img/menu/milanesa-queso.webp';
import tortaCubana from './assets/img/menu/torta-cubana.webp';
import tortaRes from './assets/img/menu/torta-res.webp';
import tortaResQueso from './assets/img/menu/torta-res-queso.webp';
import tortaNorteña from './assets/img/menu/torta-norteña.webp';
import tortaPierna from './assets/img/menu/torta-pierna.webp';
import tortaPiernaQueso from './assets/img/menu/torta-pierna-queso.webp';
import tortaRusa from './assets/img/menu/torta-rusa.webp';
import tortaSalchicha from './assets/img/menu/torta-salchicha.webp';
import tortaSalchichaQueso from './assets/img/menu/torta-salchicha-queso.webp';
import tortaStar from './assets/img/menu/torta-star.webp';

// Imagenes "Los Sandwiches"

import hamburguesa from './assets/img/menu/hamburguesa.webp';
import sandwich from './assets/img/menu/sandwich.webp';
import croissant from './assets/img/menu/croissant.webp';
import hojaldra from './assets/img/menu/hojaldra.webp';
import bollosRellenos from './assets/img/menu/bollos-rellenos.webp';

// Imagenes "Los Desayunos"

import granola from './assets/img/menu/granola.webp';
import enchiladas from './assets/img/menu/enchiladas.webp';
import chilaquilesPollo from './assets/img/menu/chilaquiles-pollo.webp';
import flautas from './assets/img/menu/flautas.webp';
import sopesFrijol from './assets/img/menu/sopes-frijol.webp';
import tamales from './assets/img/menu/tamales-oaxaqueños.webp';
import huevosGusto from './assets/img/menu/huevos-gusto.webp';
import sincronizadas from './assets/img/menu/sincronizadas.webp';
import hotCakes from './assets/img/menu/hot-cakes.webp';
import molletes from './assets/img/menu/molletes.webp';
import milanesa from './assets/img/menu/milanesa.webp';
import papas from './assets/img/menu/papas.webp';
import ensaladas from './assets/img/menu/ensaladas.webp';
import frijoles from './assets/img/menu/frijoles.webp';
import enchiladasSuizas from './assets/img/menu/enchiladas-suizas.webp';

// Imagenes "Platos Fuertes"

import tresTiempos from './assets/img/menu/tres-tiempos.webp';
import boneless from './assets/img/menu/boneless.webp';
import bistecPure from './assets/img/menu/bistec-pure.webp';
import nuggetsPapas from './assets/img/menu/nuggets-papas.webp';
import milanesaArroz from './assets/img/menu/milanesa-de-pollo-arroz.webp';
import arrozLeche from './assets/img/menu/arroz-con-leche.webp';

const menu = [
    {
        products: 'Lo Calientito',
        productImg: "fa-solid fa-mug-hot",
        nameProduct: [
            {
                name: 'Café Express',
                smallPrice: 25.00,
                img: express,
            },
            {
                name: 'Café Americano',
                smallPrice: 25.00,
                midPrice: 29.00,
                bigPrice: 40.00,
                img: americano,
            },
            {
                name: 'Café Capuchino',
                description: 'Tipos de leche: entera, deslactosada y light.',
                smallPrice: 25.00,
                midPrice: 35.00,
                bigPrice: 45.00,
                img: capuchino,
            },
            {
                name: 'Café Latte',
                description: 'Tipos de leche: entera, deslactosada y light.',
                smallPrice: 25.00,
                midPrice: 35.00,
                bigPrice: 45.00,
                img: latte,
            },
            {
                name: 'Café Capuchino de Sabores',
                description: 'Tipos de leche: entera, deslactosada y light.',
                smallPrice: 25.00,
                midPrice: 35.00,
                bigPrice: 45.00,
                img: capuchinoSabor,
            },
            {
                name: 'Chocolate Caliente',
                description: 'Tipos de leche: entera, deslactosada y light.',
                smallPrice: 25.00,
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
        products: 'Jugos, aguas y refrescos',
        productImg: "fa-solid fa-blender",
        nameProduct: [
            {
                name: 'Naranja',
                bigPrice: 35.00,
                img: naranja,
            },
            {
                name: 'Toronja',
                bigPrice: 35.00,
                img: toronja,
            },
            {
                name: 'Verde',
                description: '',
                bigPrice: 30.00,
                img: verde,
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
                name: 'Detox',
                description: 'Te ayudará a limpiar por completo las toxinas que pudieron haber quedado en el organismo, toma un vaso al día. (Mango y manzana verde).',
                bigPrice: 42.00,
                img: detox,
            },
            {
                name: 'El Antigrasa',
                description: 'Cuídate y quema grasas con esta combinación de frutas de forma fácil y rápida. (Papaya, toronja, nopal).',
                bigPrice: 42.00,
                img: antigrasa,
            },
            {
                name: 'Bomba Amarilla',
                description: 'Un jugo para empezar con mucha energia el día. (Naranja, platano, mango, guayaba, toronja, mandarina, pera, manzana y avena)',
                bigPrice: 42.00,
                img: amarillo,
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
            /*{
                name: 'Cubana',
                description: 'Bisteck de res, pierna, salchichas, jamon, queso panela y queso oaxaca',
                midPrice: null,
                bigPrice: 80.00,
                img: tortaCubana,
            },*/
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
                bigPrice: 70.00,
                img: enchiladas,
            },
            {
                name: 'Chilaquiles de Pollo en Salsa Verde o Roja',
                description: 'Acompañados con porción individual de frijoles refritos, cebolla y queso',
                single: "Sencillos",
                chicken: "Pollo",
                bistec: "Bistec",
                egg: "Huevo",
                singlePrice: 59.00,
                chickenPrice: 69.00,
                bistecPrice: 69.00,
                eggPrice: 69.00,
                img: chilaquilesPollo,
            },
            {
                name: 'Flautas de Pollo o Res',
                description: 'Tres flautas servidas en cama de lechuga romana con jitomate y cebolla',
                bigPrice: 70.00,
                img: flautas,
            },
            {
                name: 'Sopes de Frijol',
                description: 'Frijoles refritos con chorizo, queso y crema',
                single: "Sencillos",
                combined: "Combinados",
                singlePrice: 60.00,
                combinedPrice: 70.00,
                img: sopesFrijol,
            },
            {
                name: 'Tamales oaxaqueños o de maíz, verdes o rojos',
                description: 'En hoja de platano',
                bigPrice: 35.00,
                img: tamales,
            },
            {
                name: 'Huevos al gusto',
                description: 'Revueltos, estrellados, fritos o rancheros',
                bigPrice: 50.00,
                img: huevosGusto,
            },
            {
                name: 'Sincronizadas',
                description: 'Jamón de pierna o pavo y queso manchego en tortilla de harina',
                bigPrice: 55.00,
                img: sincronizadas,
            },
            {
                name: 'Hot Cakes',
                description: 'Dos hotcakes con miel de maple o abeja',
                bigPrice: 50.00,
                img: hotCakes,
            },
            {
                name: 'Molletes',
                description: 'De jamón o tocino',
                bigPrice: 50.00,
                img: molletes,
            },
            /*{
                name: 'Milanesa Asada',
                bigPrice: 66.00,
                img: milanesa,
            },
            {
                name: 'Orden de frijoles',
                midPrice: null,
                bigPrice: 0,
                img: frijoles,
            },*/
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
            },
            /*{
                name: 'Enchiladas suizas',
                description: 'Pollo, tomates verdes y queso manchego',
                midPrice: null,
                bigPrice: 0,
                img: enchiladasSuizas,
            }*/
        ]
    },/*
    {
        products: 'Platos Fuertes',
        productImg: "fa-solid fa-utensils",
        nameProduct: [
            {
                name: 'Menu a tres tiempos:',
                first: '- Sopa o consomé',
                salad: '- Arroz o ensalada',
                second: "- Tres guisados (uno a elegir)",
                bigPrice: 0,
                img: tresTiempos
            },
            {
                name: 'Boneless con pure o ensalada',
                description: 'Lechuga, pepino y zanahoria.',
                bigPrice: 0,
                img: boneless,
            },
            {
                name: 'Bistec con pure, papas fritas o ensalada',
                bigPrice: 0,
                img: bistecPure,
            },
            {
                name: 'Papas fritas con nuggets',
                bigPrice: 0,
                img: nuggetsPapas,
            },
            {
                name: 'Milanesa de carne o pollo con arroz',
                description: 'Ensalada a elección',
                bigPrice: 0,
                img: milanesaArroz,
            },
            {
                name: 'Los platos fuertes incluyen un postre a elección:',
                first: '- Arroz con leche',
                second: '- Platano frito con mermelada o crema',
                img: arrozLeche
            }
        ]
    }*/
]

export default menu;