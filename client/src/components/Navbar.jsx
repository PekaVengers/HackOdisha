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
  }, [location.pathname, isAuthenticated]);

  return (
    <div>
      <div className="p-1 bg-[#CFFFD9] px-[1rem]">
        <ul className="flex justify-end">
          <li className="mx-4 my-6">
            <NavLink
              className={({ isActive }) =>
                `text-xl hover:text-green-500 duration-500 font-bold ${
                  isActive ? "text-green-500" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mx-4 my-6">
            <NavLink
              className={({ isActive }) =>
                `text-xl hover:text-green-500 duration-500 font-bold ${
                  isActive ? "text-green-500" : ""
                }`
              }
              to="/planted-trees"
            >
              Planted Trees
            </NavLink>
          </li>
          <li className="mx-4 my-6">
            <NavLink
              className={({ isActive }) =>
                `text-xl hover:text-green-500 duration-500 font-bold ${
                  isActive ? "text-green-500" : ""
                }`
              }
              to="/events"
            >
              Events
            </NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li className="mx-4 my-6">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl hover:text-green-500 duration-500 font-bold ${
                      isActive ? "text-green-500" : ""
                    }`
                  }
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
              <li className="mx-4 my-6">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl hover:text-green-500 duration-500 font-bold ${
                      isActive ? "text-green-500" : ""
                    }`
                  }
                  to="/tree-plantation"
                >
                  Tree Plantation
                </NavLink>
              </li>
              <li className="mx-4 my-6">
                <NavLink
                  className={({ isActive }) =>
                    `text-xl hover:text-green-500 duration-500 font-bold ${
                      isActive ? "text-green-500" : ""
                    }`
                  }
                  to="/create-event"
                >
                  Create Event
                </NavLink>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li className="mx-4 my-6 font-bold">
              <LoginButton />
            </li>
          )}
          {isLoggedIn && (
            <li className="mx-4 my-6">
              <LogoutButton />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
