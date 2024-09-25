import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { addToFavourites } from "../redux/favouritesSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToFavourites = () => {
    dispatch(addToFavourites(product));
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg m-4">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={product.image}
        alt={product.title}
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
        <p className="text-gray-500">${product.price}</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handleAddToCart}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Add to Cart
        </button>
        <button
          onClick={handleAddToFavourites}
          className="text-gray-500 hover:text-red-500"
        >
          ♥
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
