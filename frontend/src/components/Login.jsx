import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
export default function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }
    console.log("Login:", { email, password });
    setError("");
    onClose();
  };

  if (!isOpen) return null; // Hide modal if not open

  return (
    <div className="fixed inset-0 z-80 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {/* Close Button */}
        <Link to="/"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </Link>

        <h3 className="text-2xl font-bold text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          {/* Email */}
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

          {/* Password */}
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

          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition"
            >
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
