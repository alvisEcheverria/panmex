import React from 'react';

const Labels = ({imgs}) => {
    
    return (
        <ul className='labels-content'>
            {
                imgs.map((img, index) =>(
                    <li key={index}>
                       <a href={img.link} target='_blank'><img className='labels' src={img.logo} alt="labels" /></a> 
                    </li>
                ))
            }
        </ul>
    );
};

export default Labels;