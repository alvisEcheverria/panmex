import React, { useEffect, useState } from 'react';
import productsMenu from '../products';

const Menu = () => {

    const [ menu, setMenu ] = useState([]);
    const [ indexMenu, setIndexMenu ] = useState(0);
    const [ startIndex, setStartIndex ] = useState(0);
    
    useEffect(()=> {
        setMenu(productsMenu)
    },[])

    const handleProduct = (index) =>{
        setIndexMenu(index);
        setStartIndex(0)
    }

    const productToShow = menu[indexMenu]?.nameProduct.slice(startIndex, startIndex + 6);

    const handlePrev = ()=>{
        setStartIndex(startIndex - 6)
    }

    const handleNext = ()=>{
        setStartIndex(startIndex + 6)
    }

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
            return menu[indexMenu]?.nameProduct;
        }
        else{
            return productToShow;
        }

    }
    
    return (
        <section id='menu'>
            <div className='menu-container'>
                <h2 className='title-menu'>Nuestro Menu</h2>
                <ul className='icons-container'>
                    {
                        menu.map((menus, index) =>(
                            <li className='icon-flex'
                                style={index > 0? {borderLeft: 'dashed 0.1rem gray'}: null}  
                                onClick={()=> handleProduct(index)} 
                                key={menus.products}
                            >
                                <i className={`${menus.productImg}`}></i>
                                <h3 style={indexMenu === index ? { color: '#d62828' } : null}>{menus.products}</h3>
                            </li>
                        ))
                    }
                </ul>
                <div className='slider-card-content'>
                    <button className={`btn-menu ${startIndex === 0 && 'btn-disabled'}`} onClick={handlePrev} disabled={startIndex === 0}><i className="fa-solid fa-caret-left"></i></button>
                    <ul className='card-menu-container'>
                        {
                            mobile()?.map(products =>(
                                <li className='card-menu' key={products.name}>
                                    <img className='img-product' src={products.img} alt="producto" />
                                    <div className='product-description-container'>
                                        <div>
                                            <h3 className='product-name'>{products.name}</h3>
                                            <p className='description-product'>{products.description}</p>
                                        </div>
                                        <p className='price'>${products.bigPrice?.toFixed(2)}</p>
                                    </div>
                                </li>
                            )) 
                        }
                    </ul>
                    <button className={`btn-menu ${startIndex + 6 >= menu[indexMenu]?.nameProduct.length && 'btn-disabled'}`} onClick={handleNext} disabled={startIndex + 6 >= menu[indexMenu]?.nameProduct.length}><i className="fa-solid fa-caret-right"></i></button>
                </div>      
            </div>
        </section>
    );
};

export default Menu;