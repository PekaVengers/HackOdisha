import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from '../assets/Logo.png';
import {FaGripHorizontal} from 'react-icons/fa'
import {BiArrowToRight} from 'react-icons/bi'

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, [location.pathname, isAuthenticated]);

  const [toggle,setToggle] = useState(false)

  const toggleMobileMenu=()=>{
    setToggle(!toggle)
  }

  return (
    <div className="bg-[#CFFFD9]">
      <div className="container mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img className="h-16" src={Logo} alt="Logo" />
          </NavLink>
          <div className="md:hidden">
            <button
              className="text-green-500 hover:text-green-700 focus:outline-none text-3xl"
              onClick={toggleMobileMenu}
            >
              {toggle ? <BiArrowToRight/> : <FaGripHorizontal/>}
            </button>
          </div>
          <ul className={`md:flex ${toggle ? 'block' : 'hidden'}`}>
            <li className="my-2 md:my-0 mx-4">
              <NavLink
                className="text-xl hover:text-green-500 duration-500 font-bold"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="my-2 md:my-0 mx-4">
              <NavLink
                className="text-xl hover:text-green-500 duration-500 font-bold"
                to="/planted-trees"
              >
                Planted Trees
              </NavLink>
            </li>
            <li className="my-2 md:my-0 mx-4">
              <NavLink
                className="text-xl hover:text-green-500 duration-500 font-bold"
                to="/events"
              >
                Events
              </NavLink>
            </li>
            {isLoggedIn && (
              <>
                <li className="my-2 md:my-0 mx-4">
                  <NavLink
                    className="text-xl hover:text-green-500 duration-500 font-bold"
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </li>
                <li className="my-2 md:my-0 mx-4">
                  <NavLink
                    className="text-xl hover:text-green-500 duration-500 font-bold"
                    to="/tree-plantation"
                  >
                    Tree Plantation
                  </NavLink>
                </li>
                <li className="my-2 md:my-0 mx-4">
                  <NavLink
                    className="text-xl hover:text-green-500 duration-500 font-bold"
                    to="/create-event"
                  >
                    Create Event
                  </NavLink>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <li className="my-2 md:my-0 mx-4 font-bold">
                <LoginButton />
              </li>
            )}
            {isLoggedIn && (
              <li className="my-2 md:my-0 mx-4">
                <LogoutButton />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}