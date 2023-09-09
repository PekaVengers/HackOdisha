import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/Layout"
import Profile from "./pages/Profile"
import TreePlantation, {action as treePlantationAction} from "./pages/TreePlantation"
import CreateEvent, {action as createEventAction} from "./pages/CreateEvent"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route action={treePlantationAction} path="/tree-plantation" element={<TreePlantation />} />
    <Route action={createEventAction} path="/create-event" element={<CreateEvent />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
