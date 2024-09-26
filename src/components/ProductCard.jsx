import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToFavourites } from "../redux/favouritesSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch(); // Access the Redux dispatch function

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Dispatch action to add the product to the cart
  };

  const handleAddToFavourites = () => {
    dispatch(addToFavourites(product)); // Dispatch action to add the product to favorites
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg m-4 transition-transform transform hover:scale-105">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={product.image}
        alt={product.title}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToFavourites}
          className="text-gray-500 hover:text-red-500 transition duration-200"
        >
          ♥
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
