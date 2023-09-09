import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import TreePlantation, {action as treePlantationAction} from "./pages/TreePlantation"
import PlantedTrees, {loader as plantedTreesLoader} from "./pages/PlantedTrees"
import RRR from "./pages/RRR"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route action={treePlantationAction} path="tree-plantation" element={<TreePlantation />} />
    <Route loader={plantedTreesLoader} path="planted-trees" element={<PlantedTrees />} />
    <Route path="rrr" element={<RRR />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
