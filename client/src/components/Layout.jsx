import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Footer1 from "./Footer1"
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer1 />
    </div>
  )
}
