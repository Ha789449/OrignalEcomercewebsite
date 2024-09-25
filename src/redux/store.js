// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Make sure path is correct
import favouritesReducer from './favouritesSlice'; // Make sure path is correct

const store = configureStore({
    
  reducer: {
    cart: cartReducer,
    
    favourites: favouritesReducer,
  },
});

export default store;
