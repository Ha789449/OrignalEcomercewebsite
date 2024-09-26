// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 
import Navbar from './components/Navbar.jsx'; 
import Footer from './components/Footer.jsx'; 
import HomePage from './pages/Homepage.jsx'; 
import ProductContainer from './components/ProductContainer'; // Import ProductContainer
import Cart from './components/Cart.jsx';  
import Favorites from './components/Favorites.jsx';  
import Signup from './components/Signup.jsx';  
import Login from './components/Login.jsx';  
import AboutUs from './components/About.jsx'; 

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductContainer />} /> {/* Update here */}
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
                <Footer />
            </Router>
        </Provider>
    );
};

export default App;
