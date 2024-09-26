import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const InputField = ({ type, placeholder, value, onChange, required }) => (
    <div className="mb-4">
        <input
            type={type}
            placeholder={placeholder}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={value}
            onChange={onChange}
            required={required}
        />
    </div>
);

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        } catch (error) {
            setError("Login failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Login</h2>
                {error && <p className="mb-4 text-red-500 text-center">{error}</p>}
                <InputField
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Login"}
                </button>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account? <a href="/signup" className="text-orange-500 hover:text-orange-600 font-semibold">Signup</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
