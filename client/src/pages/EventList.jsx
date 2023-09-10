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
    <div className="flex flex-col items-center">
      {data?.map(event => (
        <div key={event.id} className="border-solid w-full md:w-[40rem] border-2 border-green-500 p-3 md:m-5 m-6 inline-block rounded-br-xl	rounded-tl-xl">
          <h1 className="text-2xl font-bold mb-2">{event.name}</h1>
          <p className="text-gray-600">{event.organization}</p>
          <p className="text-gray-600">{event.location}</p>
          <p className="text-gray-600">{event.time}</p>
          <p className="text-gray-800 mt-2">{event.description}</p>
        </div>
      ))}
    </div>

  )
}
