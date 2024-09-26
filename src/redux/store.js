// Importing necessary functions and reducers
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Importing the cart reducer
import favouritesReducer from './favouritesSlice'; // Importing the favourites reducer

// Creating the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // Adding cart reducer to the store under the 'cart' key
    favorites: favouritesReducer, // Adding favourites reducer to the store under the 'favourites' key
  },
});

// Exporting the configured store
export default store;
