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
    <div className=" bg-slate-300">
      <div className=' text-center px-12 py-8'>
        <h1 className=' text-5xl font-bold py-6'>Planted Trees</h1>
        <p className=' text-3xl font-normal'>Our heart felt gratitute to those who planted trees and shared their story here.💙</p>
      </div>
      <div className="w-full px-5 flex flex-col justify-between">
        <div className="flex items-center flex-col mt-5 p-3">
          {
            data?.map(post => (
              <div key={post.id} className="flex justify-start py-6">
                <img
                  src={post.profile}
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
                <div
                  className="ml-2 py-3 px-4 bg-slate-50 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-black"
                >
                  <h1 className=' text-2xl font-bold '>{post.name}</h1>
                  <p className="font-normal text-xl max-w-xl">
                  {post.message}
                  </p>
                  <div className="w-72 h-72 rounded-full my-8 mx-auto">
                  <img src={post.image} className='w-full h-full object-cover' />
                </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}