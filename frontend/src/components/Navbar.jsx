import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";
const Navbar = () => {
  const [authUser, setAuthUser] = useAuth();
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // 🔥 State to control Login modal
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`max-w-screen-2xl container mx-auto px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? "shadow-md bg-base-200 transition-all duration-300" : ""
        }`}
    >
      <nav
        className={`w-full shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-base-200 text-black"
          }`}
      >
        <div className="flex justify-between items-center px-6 py-3">
          {/* Logo */}
          <span className="font-bold text-lg cursor-pointer" onClick={() => navigate("/")}>
            BookStore
          </span>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl focus:outline-none"
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
              Home
            </span>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <span
                className="cursor-pointer hover:underline"
                onClick={() => navigate("/course")}
              >
                Courses
              </span>
              {coursesOpen && (
                <ul
                  className={`absolute top-full left-0 mt-2 w-40 ${darkMode ? "bg-gray-800 text-white" : "bg-base-100"
                    } shadow-lg rounded-lg p-2`}
                >
                  <li className="p-2 hover:bg-base-300 cursor-pointer">Item 1</li>
                  <li className="p-2 hover:bg-base-300 cursor-pointer">Item 2</li>
                </ul>
              )}
            </div>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span
                className="cursor-pointer hover:underline"
                onClick={() => navigate("/about")}
              >
                About
              </span>
              {aboutOpen && (
                <ul
                  className={`absolute top-full left-0 mt-2 w-40 ${darkMode ? "bg-gray-800 text-white" : "bg-base-100"
                    } shadow-lg rounded-lg p-2`}
                >
                  <li className="p-2 hover:bg-base-300 cursor-pointer">Item 1</li>
                  <li className="p-2 hover:bg-base-300 cursor-pointer">Item 2</li>
                </ul>
              )}
            </div>

            {/* Content Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setContentOpen(true)}
              onMouseLeave={() => setContentOpen(false)}
            >
              <span
                className="cursor-pointer hover:underline"
                onClick={() => navigate("/content")}
              >
                Content
              </span>
              {contentOpen && (
                <ul
                  className={`absolute top-full left-0 mt-2 w-40 ${darkMode ? "bg-gray-800 text-white" : "bg-base-100"
                    } shadow-lg rounded-lg p-2`}
                >
                  <li className="p-2 hover:bg-base-300 cursor-pointer">Item 1</li>
                  <li className="p-2 hover:bg-base-300 cursor-pointer">Item 2</li>
                </ul>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-lg w-40 md:w-48 bg-white text-black border-gray-300"
            />
            {
              authUser ? (<Logout /> ):(
                <button
                  className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
                  id="navbar-login-btn"
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </button>)
            }
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-black hover:bg-slate-400"
            >
              🌙
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4">
            <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>
              Home
            </span>
            <span className="cursor-pointer hover:underline" onClick={() => navigate("/course")}>
              Courses
            </span>
            <span className="cursor-pointer hover:underline" onClick={() => navigate("/about")}>
              About
            </span>
            <span className="cursor-pointer hover:underline" onClick={() => navigate("/content")}>
              Content
            </span>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-lg w-40"
            />
            <button
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900"
              onClick={() => setIsLoginOpen(true)}
            >
              Login
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-black hover:bg-slate-400"
            >
              🌙
            </button>
          </div>
        )}
      </nav>

      {/* 🔥 Login Modal */}
      <Login isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Navbar;
