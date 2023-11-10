import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addToCart, fetchAllProducts} from "../Redux/cartSlice";

const Home = () => {


    const dispatch = useDispatch();
    const {isLoading, products} = useSelector(store => store.cart);

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            <ul>
            {products.length > 0 && products.map(product => {
                return (
                    <li key={product.id}>
                      <h1>#{product.id} {product.title}</h1>
                        <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                    </li>
                )
            })}
            </ul>
        </div>
    );
};

export default Home;