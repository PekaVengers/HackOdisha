import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import TreePlantation, {action as treePlantationAction} from "./pages/TreePlantation"
import PlantedTrees, {loader as plantedTreesLoader} from "./pages/PlantedTrees"
import SaveAtHome from "./pages/SaveAtHome"
import CreateEvent, {action as createEventAction} from "./pages/CreateEvent"
import NotFound from "./components/NotFound"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="save-at-home" element={<SaveAtHome />} />
    <Route loader={plantedTreesLoader} path="planted-trees" element={<PlantedTrees />} />
    <Route action={treePlantationAction} path="tree-plantation" element={<TreePlantation />} />
    <Route action={createEventAction} path="create-event" element={<CreateEvent />} />
    <Route path="*" element={<NotFound />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
