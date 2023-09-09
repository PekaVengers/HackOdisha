import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import TreePlantation, {action as treePlantationAction} from "./pages/TreePlantation"
import SearchProduct from "./pages/SearchProduct"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/search-product" element={<SearchProduct />} />
    <Route action={treePlantationAction} path="/tree-plantation" element={<TreePlantation />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
