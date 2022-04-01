import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const [tShirts] = useTshirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if(!exists){
            const newCart = [...cart, selectedItem];
            setCart(newCart)
        }
        else{
            alert ('This Item Already Added')
        }
        
    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <Tshirt 
                        key={tShirt.id}
                        tshirt= {tShirt}
                        handleAddToCart = {handleAddToCart}
                        ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}
                    handleRemoveFromCart = {handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;