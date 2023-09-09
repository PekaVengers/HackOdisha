import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated);
  const location = useLocation();
  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, [location.pathname, isAuthenticated])

  return (
    <div>
      <div className="p-5 bg-[#CFFFD9] px-[3rem] shadow md:flex md:items-center md:justify-between">
        <ul className="md:flex md:items-center">
              <li className="mx-4 my-6 md:my-0">
                <NavLink className={({ isActive }) => (`text-xl hover:text-green-500 duration-500 font-bold ${isActive ? "text-green-500" : ""}`)} to="/">Home</NavLink>
              </li>
          {
            isLoggedIn &&
            <>
              <li className="mx-4 my-6 md:my-0">
                <NavLink className={({ isActive }) => (`text-xl hover:text-green-500 duration-500 font-bold ${isActive ? "text-green-500" : ""}`)} to="/profile">Profile</NavLink>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <NavLink className={({ isActive }) => (`text-xl hover:text-green-500 duration-500 font-bold ${isActive ? "text-green-500" : ""}`)} to="/tree-plantation">Tree Plantation</NavLink>
              </li>
            </>
          }
          {
            !isLoggedIn &&
            <li className="mx-4 my-6 md:my-0 font-bold">
              <LoginButton />
            </li>
          }
          {
            isLoggedIn &&
            <li className="mx-4 my-6 md:my-0">
              <LogoutButton />
            </li>
          }
        </ul>
      </div>
    </div>
  );
}