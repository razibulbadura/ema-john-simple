import React from 'react';
import './Product.css'

const Product = (props) => {
    


    const {img, name, seller,quantity, price}= props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img?img:'img not found'} alt="" />
            <h6 className='product-name'>{name}</h6>
            <h6>{seller}</h6>
            <button onClick={()=>handleAddToCart(props.product)} className='button'>add to chart</button>
        </div>
    );
};

export default Product;