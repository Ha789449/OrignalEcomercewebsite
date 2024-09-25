import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful!");
        } catch (error) {
            alert("Signup failed: " + error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSignup} className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Create an Account</h2>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full p-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200">
                    Signup
                </button>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <a href="/login" className="text-orange-500 hover:text-orange-600 font-semibold">Login</a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
