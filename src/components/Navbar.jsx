import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-orange-500 p-4">
            <div className="flex justify-between items-center">
          
                
                <button 
                    className="text-white md:hidden"
                    onClick={toggleMenu}
                >
                    {isOpen ? 'Close' : 'Menu'}
                </button>

                <ul className={`flex-col md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} md:mt-0 mt-2 transition-all duration-300 ease-in-out`}>
                    <li className="mb-2 md:mb-0 md:mr-4">
                        <Link to="/" className="text-white hover:text-gray-500 font-bold">Home</Link>
                    </li>
                    <li className="mb-2 md:mb-0 md:mr-4">
                        <Link to="/products" className="text-white hover:text-gray-500 font-bold">Products</Link>
                    </li>
                    <li className="mb-2 md:mb-0 md:mr-4">
                        <Link to="/cart" className="text-white hover:text-gray-500 font-bold">Cart</Link>
                    </li>
                    <li className="mb-2 md:mb-0 md:mr-4">
                        <Link to="/favorites" className="text-white hover:text-gray-500 font-bold">Favorites</Link>
                    </li>
                    <li className="mb-2 md:mb-0 md:mr-4">
                        <Link to="/signup" className="text-white font-bold hover:text-gray-500">Signup</Link>
                    </li>
                    <li className="mb-2 md:mb-0">
                        <Link to="/login" className="text-white font-bold hover:text-gray-500">Login</Link>
                    </li>
                    <li className="mb-2 md:mb-0 md:mr-4 pl-3">
                        <Link to="/about" className="text-white hover:text-gray-500 font-bold">About Us</Link>
                    </li>
                </ul>
                <h1 className="text-white text-lg md:ml-auto hover:bg-gray-500">E-Commerce</h1>
            </div>
        </nav>
    );
};

export default Navbar;
