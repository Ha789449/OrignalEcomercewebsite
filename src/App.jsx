import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';  // Redux store import
import Navbar from './components/Navbar.jsx';  // Navbar component
import Footer from './components/Footer.jsx';  // Footer component
import HomePage from './pages/Homepage.jsx';  // HomePage component
import ProductList from './components/ProductList.jsx';  // ProductList component
import Cart from './components/Cart.jsx';  // Cart component
import Favorites from './components/Favorites.jsx';  // Favorites component
import Signup from './components/Signup.jsx';  // Signup component
import Login from './components/Login.jsx';  // Login component
import AboutUs from './components/About.jsx'; // Import the About Us component
const App = () => {
    return (
        <Provider store={store}>  {/* Redux Provider wraps the entire app */}
            <Router>
                <Navbar />  {/* Navbar at the top of every page */}
                <Routes>
                    <Route path="/" element={<HomePage />} />  {/* Home route */}
                    <Route path="/products" element={<ProductList />} />  {/* Products list route */}
                    <Route path="/cart" element={<Cart />} />  {/* Cart route */}
                    <Route path="/favorites" element={<Favorites />} />  {/* Favorites route */}
                    <Route path="/signup" element={<Signup />} />  {/* Signup route */}
                    <Route path="/login" element={<Login />} />  {/* Login route */}
                    <Route path="/about" element={<AboutUs />} /> {/* Add the About Us route */}
                </Routes>
                <Footer />  {/* Footer at the bottom of every page */}
            </Router>
        </Provider>
    );
};

export default App;
