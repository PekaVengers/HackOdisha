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
      {
        data?.map(post => (
          <div key={post.id}>
            <img src={post.profile} />
            <span>{post.name}</span>
            <img src={post.image} />
            <p>{post.message}</p>
          </div>
        ))
      }
    </div>
  )
}
