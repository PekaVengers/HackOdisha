import { BASE_URL } from "../utils/baseURL"
import axios from "axios"
import { useLoaderData } from "react-router";

export async function loader() {
  const res = await axios.get(`${BASE_URL}/api/plant-tree/`)
  return res.data;
}

export default function PlantedTrees() {

  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className=' text-center px-12 py-8'>
        <h1 className=' text-5xl font-bold py-6'>Tree Planters</h1>
        <p className=' text-3xl font-normal'>Our heart felt gratitute to those who planted trees and shared here.💙</p>
      </div>
      <div className="w-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5">
          {
            data?.map(post => (
              <div key={post.id} className="flex justify-start py-6">
                <img
                  src={post.profile}
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
                <div
                  className="ml-2 py-3 px-4 bg-gray-500 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                >
                  <h1 className=' text-xl font-bold'>{post.name}</h1>
                  {post.message}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
