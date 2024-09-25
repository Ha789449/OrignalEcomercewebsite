// pages/FavouritesPage.js
import React from 'react';
import { useSelector } from 'react-redux';
// import { fetchProducts } from '../api/products';

const FavouritesPage = () => {
  const favouriteItems = useSelector(state => state.favourites.favourites);

  return (
    <div>
      <h2>Your Favourites</h2>
      {favouriteItems.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default FavouritesPage;
