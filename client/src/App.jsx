import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
