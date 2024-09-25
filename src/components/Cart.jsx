// src/components/Cart.jsx
// import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import ProductList from './ProductList';
import { useState,useEffect } from 'react';

const Cart = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log('Error fetching products:', error));

        document.title = "Home - E-Commerce";
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-white shadow">
                <div className="container mx-auto py-4 px-6">
                    <h1 className="text-3xl font-bold text-center text-gray-800">
                        Welcome to Our Store
                    </h1>
                </div>
            </header>

            <main className="container mx-auto py-6">
                <ProductList products={products} /> {/* Pass products as a prop */}
            </main>
        </div>
    );
};

export default Cart;
