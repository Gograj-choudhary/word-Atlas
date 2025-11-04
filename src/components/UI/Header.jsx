import { NavLink } from "react-router-dom";
import { IoReorderThreeSharp } from "react-icons/io5";
import { useState } from "react";

export const Header = () => {
  const [show, setShow] = useState(false);
  const handleOnClick = () => {
    setShow(!show);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          <NavLink to="/">WorldAtlas</NavLink>
        </div>

        
        <div className="md:hidden">
          <button onClick={handleOnClick} className="text-3xl text-gray-800 dark:text-white">
            <IoReorderThreeSharp />
          </button>
        </div>

        
        <ul className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/country"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contect"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      
      {show && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-gray-800 dark:text-gray-200 font-medium">
          <li>
            <NavLink
              to="/"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/country"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Country
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contect"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};
