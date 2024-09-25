import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-bold mb-2">Get in Touch</h2>
        <p className="mb-1">Contact Number: <span className="text-orange-500">+92 123 456 7890</span></p>
        <p className="mb-1">Email: <span className="text-orange-500">your-email@example.com</span></p>
        <p className="mb-4">Follow us on:</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-orange-500">Facebook</a>
          <a href="#" className="hover:text-orange-500">Twitter</a>
          <a href="#" className="hover:text-orange-500">Instagram</a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
