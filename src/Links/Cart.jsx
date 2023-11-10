import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../Redux/cartSlice";

const Cart = () => {

    const {items} = useSelector(store => store.cart)
    const dispatch = useDispatch();

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    }

    return (
        <div>
            {items.length > 0 && items.map(item => {
                return(
                    <div className='cart_item'>
                        <h3>QTY: {item.qty}</h3>
                      <h2> #{item.id} {item.title} </h2>
                        <button onClick={() => handleRemoveFromCart(item)}>Remove from cart</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Cart;