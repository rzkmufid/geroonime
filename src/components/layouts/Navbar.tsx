import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-opacity-80 backdrop-blur-md text-white items-center text-white fixed top-0 left-0 right-0 z-50 px-16">
      <div className="mx-auto px-4 py-3 my-auto flex justify-between items-center" style={{ height: "100px", }} >
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300 text-white transition duration-300">
            Geroo
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/api"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              API
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/anime"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              Anime
            </Link>
          </li>
          <li>
            <Link
              to="/manga"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              Manga
            </Link>
          </li>
          <li>
            <Link
              to="/topten"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              Top Rank
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/gerooo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://discord.gg/8ZQrH7E"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/geroo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-white transition duration-300"
            >
              Linkedin
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
