import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default function Signup({ onClose }) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Handle Signup Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }
        setError("");
        console.log("Signup submitted:", { email, password });
        if (onClose) onClose(); // Close modal after signup
    };

    // 🔥 Trigger Navbar Login Button Click
    const openLogin = () => {
        if (onClose) onClose(); // Close signup modal
        navigate("/login"); // Go to login page
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                {/* Close Button */}
                <Link
                    to="/"
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </Link>

                <h3 className="text-2xl font-bold text-center mb-4">Signup</h3>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none"
                        />
                    </div>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md outline-none"
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

                    {/* Buttons */}
                    <div className="flex justify-between items-center">
                        <button
                            type="submit"
                            className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition"
                        >
                            Signup
                        </button>

                        <p>
                            Already registered?{" "}
                            <button
                                type="button"
                                onClick={openLogin}
                                className="underline text-blue-500 cursor-pointer"
                            >
                                Login
                            </button>{" "}
                            <Login />
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
