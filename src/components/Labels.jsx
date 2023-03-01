import React from 'react';

const Labels = ({imgs}) => {
    
    return (
        <ul className='labels-content'>
            {
                imgs.map((img, index) =>(
                    <li key={index}>
                        <img className='labels' src={img} alt="labels" />
                    </li>
                ))
            }
        </ul>
    );
};

export default Labels;