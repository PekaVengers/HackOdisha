import { BASE_URL } from "../utils/baseURL"
import axios from "axios"
import { useLoaderData } from "react-router";

export async function loader() {
  const res = await axios.get(`${BASE_URL}/api/events/`)
  return res.data;
}

export default function EventList() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      {
        data?.map(event => (
          <div key={event.id}>
            
            <h1 className="font-bold">{event.name}</h1>
            <p>{event.organization}</p>
            <p>{event.location}</p>
            <p>{event.time}</p>
            <p>{event.description}</p>
          </div>
        ))
      }
    </div>
  )
}
