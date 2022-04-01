import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
        let command;
        if(cart.length === 0 ){
            command = <p style={{color:'red'}}>Please Add At Last One Item!!!</p>
        }
        else if(cart.length === 1){
            command = <p style={{color:'red'}}>Please Add more...!!!</p>
        }
        else{
           command = <p><small style={{color:'green'}}>Thenks For Adding Items</small></p>
        }
    return (
        <div>
            <h2>Order Summary</h2>
            {command}
            <h5>Item Selected : {cart.length}</h5>
            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveFromCart(tShirt)} className='remove-btn'>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;