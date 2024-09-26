// src/components/ProductContainer.jsx
import React from 'react';
import ProductList from './ProductList'; // Assuming you have a ProductList component
import productsData from '../data/productsData'; // Make sure to create this file

const ProductContainer = () => {
    // You can fetch or import product data here
    const products = productsData; // Replace with your data source

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Our Products</h2>
            <ProductList products={products} /> {/* Pass the products to the ProductList */}
        </div>
    );
};

export default ProductContainer;
