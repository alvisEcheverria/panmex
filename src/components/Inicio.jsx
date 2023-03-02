import React from 'react';

const Inicio = () => {
    /*
    const sliderMap =  setTimeout(() => {
        if (startIndex + 3 < sucursales.length) {
            setStartIndex(startIndex + 1);
        } else {
            setStartIndex(0);
        }
    }, 4000);*/

    return (
        <section>
            <div className='slider-content'>
                <h1>Bienvenidos a PanMex</h1>
                <h2 >Lo Mejor en Panadería y Pastelería</h2>
                <p>
                    En PANMEX queremos seguir ofreciendote la calidad de siempre 
                    y por ello queremos estar más cerca de ti. Disfruta de nuestros productos artesanales, 100% mexicanos.
                </p>
                <a className='call' href="tel: +52 55 5595 2768" target='_blank'>Llamanos</a>
            </div>
        </section>
    );
};

export default Inicio;