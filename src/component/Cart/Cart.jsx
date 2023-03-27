import React from 'react';
import './Cart.css'

const Cart = (props) => {
  
   const {cart}=props;
   let total=0;
   let totalShipping=0;
   let tax=0;
   let grandTotal;
   for (const product of cart){
    total = total + product.price; 
    totalShipping = totalShipping + product.shipping;
    tax= total*7/100;
    grandTotal=total+totalShipping+tax;
    
    
   }
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected item:{cart.length}</p>
            <p>total Price:${total}</p>
            <p>total Shipping:{totalShipping}</p>
            <h6>Tax  {tax.toFixed(2)}</h6>
            <h6>Grand Total  {grandTotal.toFixed(2)}</h6>

        </div>
    );
};

export default Cart;