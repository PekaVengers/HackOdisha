import { useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import ActionBtn from "../ActionBtn/ActionBtn"

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="nav_container flex justify-between items-center">
      <div className="logo">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Logo</span>
      </div>
      <div>
        <ul className="nav_list_item_container flex gap-[30px] justify-center items-center">
          <li
            className={`nav_list_item md:text-[20px] text-[23px] cursor-pointer large_screen_nav_item md:hidden
                      ${location.pathname === "/" && "activeTab"}`
            }
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className={`nav_list_item md:text-[20px] text-[23px] cursor-pointer ${location.pathname === "/mission" && "activeTab"}`}
            onClick={() => navigate("/mission")}
          >
            Mission
          </li>
          <li
            className={`nav_list_item md:text-[20px] text-[23px] cursor-pointer large_screen_nav_item md:hidden
                     ${location.pathname === "/contact" && "activeTab"}`
            }
            onClick={() => navigate("/contact")}
          >
            Contact
          </li>
          <li
            className="small_screen_nav_item hidden md:inline-block md:cursor-pointer nav_icon text-[22px] transition ease-in-out delay-200 hover:scale-110"
            onClick={() => navigate("/")}
          >
            <FaHome />
          </li>
          <li
            className="small_screen_nav_item hidden md:inline-block md:cursor-pointer nav_icon text-[22px] transition ease-in-out delay-200 hover:scale-110"
            onClick={() => navigate("/contact")}
          >
            <BsFillTelephoneFill />
          </li>
          <li className="large_screen_nav_item md:hidden">
            <ActionBtn text="Plant Now" target="/plant-tree" />
          </li>
        </ul>
      </div>
    </div>
  )
}
