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

    const chilaquilesAndSopes = (products) =>{
        if(products.name === "Chilaquiles de Pollo en Salsa Verde o Roja"){
            return <>
                        <li><p><span className='size-price-chila-sop'>{products.single}</span> ${products.singlePrice.toFixed(2)}</p></li>
                        <li><p><span className='size-price-chila-sop'>{products.chicken}</span> ${products.chickenPrice.toFixed(2)}</p></li>
                        <li><p><span className='size-price-chila-sop'>{products.bistec}</span> ${products.bistecPrice.toFixed(2)}</p></li>
                        <li><p><span className='size-price-chila-sop'>{products.egg}</span> ${products.eggPrice.toFixed(2)}</p></li>
                    </>
        }
        else if(products.name === "Sopes de Frijol"){
            return  <>
                        <li><p><span className='size-price-chila-sop'>{products.single}</span> ${products.singlePrice.toFixed(2)}</p></li>
                        <li><p><span className='size-price-chila-sop'>{products.combined}</span> ${products.combinedPrice.toFixed(2)}</p></li>
                    </>
        }
    }
    
    return (
        <section id='menu'>
            <div className='menu-container'>
                <div className='items-content'>
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
                </div>
                <div className='slider-card-content'>
                    <button className={`btn-menu btn-menu-left ${startIndex === 0 && 'btn-disabled'}`} onClick={handlePrev} disabled={startIndex === 0}><i className="fa-solid fa-caret-left"></i></button>
                    <ul className='card-menu-container'>
                        {
                            mobile()?.map(products =>(
                                <li className='card-menu' key={products.name}>
                                    <div className='img-menu-content'>
                                        <img className='img-product' src={products.img} alt="producto" />
                                    </div>
                                    <div className='product-description-container'>
                                        <div className='description-container'>
                                            <h3 className='product-name'>{products.name}</h3>
                                            <p className='description-product'>{products.first}</p>
                                            <p className='description-product'>{products.salad}</p>
                                            <p className='description-product'>{products.second}</p>
                                            <p className='description-product'>{products.description}</p>
                                        </div>
                                        <div className='price-container'>
                                            <ul className='chilaquil-sopes-content'>
                                                {chilaquilesAndSopes(products)}
                                            </ul>
                                            {
                                                indexMenu === 0&&
                                                    <>
                                                        {
                                                            products.smallPrice&&
                                                                < p className='price'><span className='size'>P | </span>${products.smallPrice?.toFixed(2)}</p>
                                                        }
                                                        {
                                                            products.midPrice&&
                                                                <p className='price'><span className='size'>M | </span>${products.midPrice?.toFixed(2)}</p>
                                                        }
                                                        
                                                    </>
                                            }
                                            <p className='price' style={indexMenu !== 0? {textAlign: 'center'}: null}>
                                                {
                                                    indexMenu === 0 && products.bigPrice &&
                                                        <span className='size'>G | </span>
                                                }
                                                {
                                                    products.bigPrice&&
                                                        "$"
                                                }
                                                {products.bigPrice?.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            )) 
                        }
                    </ul>
                    <button className={`btn-menu btn-menu-right ${startIndex + 6 >= menu[indexMenu]?.nameProduct.length && 'btn-disabled'}`} onClick={handleNext} disabled={startIndex + 6 >= menu[indexMenu]?.nameProduct.length}><i className="fa-solid fa-caret-right"></i></button>
                </div>
                <p className='footer-menu'>** ofrecemos servicio para comer y llevar **</p>
            </div>
        </section>
    );
};

export default Menu;