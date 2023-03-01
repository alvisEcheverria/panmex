import React, { useEffect, useState } from 'react';

const Sucursales = () => {

    const sucursales = [
        {
            name: "SAN JERÓNIMO",
            description: "Av. San Jerónimo #530 Esquina Agua Jardines del Pedregal CP 01900 CDMX",
            tel: "+52 55 5595 2768",
            tel2: "+52 55 5681 4710",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7529.7236614645935!2d-99.20665!3d19.331801!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdfff2bf167ee1%3A0x6691479e9a462577!2sPanader%C3%ADa%20Panmex!5e0!3m2!1ses-419!2sus!4v1676671723737!5m2!1ses-419!2sus"
        },
        {
            name: "SAN FERNANDO",
            description: "Av. San Fernando #236 Tlalpan CP 14000 CDMX",
            tel: "+52 55 5665 8198",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7531.181197708305!2d-99.171261!3d19.300162!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce006377f4d295%3A0x5f80c063f913436f!2sPanader%C3%ADa%20Panmex!5e0!3m2!1ses-419!2sus!4v1676671817768!5m2!1ses-419!2sus"
        },
        {
            name: "AJUSCO",
            description: "Carr. Picacho-Ajusco Km 2 Lomas de Padierna CP 14240 CDMX",
            tel: "+52 55 5446 5291",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7531.5555873925605!2d-99.217003!3d19.292027!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdff943afaeb91%3A0xa80c83eb508a8555!2spanmex!5e0!3m2!1ses-419!2sus!4v1676671901478!5m2!1ses-419!2sus"
        },
        {
            name: "PLAZA INN",
            description: "Av. Insurgentes  #1971 Local 40 Centro Comercial Plaza Inn Guadalupe Inn 01020 CDMX",
            tel: "+52 55 5661 1758",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7528.788076162248!2d-99.19570334609377!3d19.35208370000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fff6e2f4bde9%3A0xa45eefc2410e44c!2sPanMex!5e0!3m2!1ses-419!2sus!4v1676671968623!5m2!1ses-419!2sus"
        },
        {
            name: "AMORES",
            description: "Amores #1431 Piso 1 Col. del Valle Alcaldía Benito Juárez 03100 CDMX",
            tel: "+52 55 9264 3746",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.24498793473623!2d-99.16940449475676!3d19.37262471520058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff425f782c25%3A0xfbf42bcc41d89e4e!2sPANMEX%20PANADER%C3%8DA%20AMORES!5e0!3m2!1ses-419!2sus!4v1676672041052!5m2!1ses-419!2sus"
        },
        {
            name: "IRRIGACIÓN",
            description: "Boulevard Miguel Cervantes Saavedra #476 Irrigación CP 11500 CDMX",
            tel: "+52 55 5395 0706",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7524.6804778918495!2d-99.20735553967286!3d19.440892154561972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20219b71e505b%3A0xfaf89f8e9d674a37!2sPANMEX!5e0!3m2!1ses-419!2sus!4v1676672081930!5m2!1ses-419!2sus"
        },
        {
            name: "BARRANCA",
            description: "Manuel M. Ponce #83 Col. Guadalupe Inn Alcaldía Alvaro Obregón 01020 CDMX",
            tel: "+52 55 9240 6644",
            map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235.26187844457263!2d-99.18517753380468!3d19.360921659122944!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffdcd0aad05d%3A0xce6d152e4bb897ed!2sPanmex%20Panificadora!5e0!3m2!1ses-419!2sus!4v1676671323534!5m2!1ses-419!2sus"
        }
    ];

    const [ startIndex, setStartIndex ] = useState(0);

    const sucursalToShow = sucursales.slice(startIndex, startIndex + 3);


    const handlePrev = () => {
        setStartIndex(startIndex - 1);
    };

    const handleNext = () => {
        setStartIndex(startIndex + 1);
    };

    const [ isMobile, setIsMobile ] = useState(false);
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 480px)");
        setIsMobile(mediaQuery.matches);
    
        const handleWidthChange = (e) => {
            setIsMobile(e.matches);
        }
    
        mediaQuery.addEventListener('change', handleWidthChange);
        return () => mediaQuery.removeEventListener('change', handleWidthChange);
    }, []);

    const mobile = () =>{

        if(isMobile){
            return sucursales;
        }
        else{
            return sucursalToShow;
        }

    }

    return (
        <section id='sucursales'>
            <h2 className='title-locations'>Sucursales</h2>
            <div className='slider-location-container'>
                <button className='btn-location' style={startIndex === 0? {cursor: 'not-allowed'} : null} onClick={handlePrev} disabled={startIndex === 0}><i class="fa-solid fa-angle-left"></i></button>
                <ul className='card-map-container'>
                    {
                        mobile().map(sucursal =>( 
                            <li className='card-map' key={sucursal.name}>
                                <h3><i class="fa-solid fa-location-dot icon-location"></i> {sucursal.name}</h3>
                                <iframe
                                    id="googleMaps" 
                                    frameborder="0" 
                                    marginheight="0" 
                                    marginwidth="0" 
                                    width='100%'
                                    src={sucursal.map} 
                                    allowfullscreen="">
                                </iframe>
                                <p>{sucursal.description}</p>
                                <p><i class="fa-solid fa-phone icon-location"></i> <a href={`Tel: ${sucursal.tel}`} target='_blank'>{sucursal.tel}</a></p>
                            </li>
                        ))
                    }
                </ul>
                <button className='btn-location' style={startIndex +3 >= sucursales.length? {cursor: 'not-allowed'} : null} onClick={handleNext} disabled={startIndex +3>= sucursales.length}><i class="fa-solid fa-angle-right"></i></button>
            </div>
        </section>
    );
};

export default Sucursales;