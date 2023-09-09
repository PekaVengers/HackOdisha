import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import TreePlantation, {action as treePlantationAction} from "./pages/TreePlantation"
import PlantedTrees, {loader as plantedTreesLoader} from "./pages/PlantedTrees"
import RRR from "./pages/RRR"
import SaveAtHome from "./pages/SaveAtHome"
import CreateEvent, {action as createEventAction} from "./pages/CreateEvent"
import EventList, {loader as eventsLoader} from "./pages/EventList"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="profile" element={<Profile />} />
    <Route path="save-at-home" element={<SaveAtHome />} />
    <Route loader={plantedTreesLoader} path="planted-trees" element={<PlantedTrees />} />
    <Route action={treePlantationAction} path="tree-plantation" element={<TreePlantation />} />
    <Route action={createEventAction} path="create-event" element={<CreateEvent />} />
    <Route loader={eventsLoader} path="events" element={<EventList />} />
    <Route path="rrr" element={<RRR />} />
    <Route path="*" element={<p>404 Not Found</p>} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
