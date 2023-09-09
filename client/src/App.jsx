import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import TreePlantation, {action as treePlantationAction} from "./pages/TreePlantation"
import CreateEvent from "./pages/CreateEvent"
import PlantedTrees, {loader as plantedTreesLoader} from "./pages/PlantedTrees"
import SaveAtHome from "./pages/SaveAtHome"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="save-at-home" element={<SaveAtHome />} />
    <Route action={treePlantationAction} path="tree-plantation" element={<TreePlantation />} />
    <Route loader={plantedTreesLoader} path="planted-trees" element={<PlantedTrees />} />
    <Route action={CreateEvent} path="create-event" element={<CreateEvent />} />
    <Route path="*" element={<p>404 Not Found</p>} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
