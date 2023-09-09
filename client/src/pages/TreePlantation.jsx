import { Form } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BASE_URL } from "../utils/baseURL";
import axios from "axios";
import Tree from "../assets/Tree.jpg"

export async function action({request}) {
  const formData = await request.formData();
  const res = await axios.post(`${BASE_URL}/plant-tree/`)
  return null;
}

export default function TreePlantation() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div>
<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-3xl text-black font-bold sm:text-3xl">Did you just plant a tree?<br /> Share with us!</h1>

      <p className="mt-4 text-gray-500 text-2xl">
      Fill the Given Details Below 🤗
      </p>
    </div>

    <form action="" method="post" encType="multipart/form-data" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="text" className="sr-only">Name</label>

        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter Name"
          />

        </div>
      </div>
      <div>
        <label htmlFor="text" className="sr-only">Description</label>

        <div className="relative">
          <textarea
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Share your story ..."
          />

        </div>
        <div className="relative">
          <input
            type="file"
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100"
            accept="image/png, image/jpeg"
            placeholder="Upload a image"
          />

        </div>
      </div>
      


      <div className="flex items-center">
        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Post
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src={Tree}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>  
    </div>
  )
}
