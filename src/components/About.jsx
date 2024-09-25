import React from 'react';

// Using a direct link to a placeholder image of a couple
const aboutImage = "https://images.pexels.com/photos/3755766/pexels-photo-3755766.jpeg"; // Example image link

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-4">About Us</h2>
            <img src={aboutImage} alt="About Us" className="w-full h-auto rounded mb-4" />
            <p className="text-lg text-gray-700 mb-4">
                Welcome to our E-Commerce website! We are dedicated to providing you with the best online shopping experience.
                Our platform features a wide range of products, including electronics, clothing, accessories, and more.
                We strive to offer high-quality products at competitive prices, ensuring that you find exactly what you need.
            </p>
            <p className="text-lg text-gray-700 mb-4">
                Our mission is to make online shopping easy and convenient for everyone. We understand the importance of
                customer satisfaction, which is why we offer fast shipping, easy returns, and a responsive customer service team
                ready to assist you with any inquiries.
            </p>
            <p className="text-lg text-gray-700">
                Thank you for choosing us for your online shopping needs. We hope you enjoy your experience on our website!
            </p>
        </div>
    );
};

export default AboutUs;
