// src/components/ProductList.jsx
import React from 'react';

const ProductList = ({ products, onAddToCart, onRemoveFromCart }) => {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
                <div key={product.id} className="border p-4 rounded bg-white shadow-md">
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-48 object-cover mb-4 rounded" // Ensure images are responsive
                    />
                    <h2 className="font-bold">{product.title}</h2>
                    <p className="text-lg font-semibold">${product.price}</p>
                    {onRemoveFromCart ? (
                        <button
                            onClick={() => onRemoveFromCart(product)}
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                        >
                            Remove
                        </button>
                    ) : (
                        <button
                            onClick={() => onAddToCart(product)}
                            className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
