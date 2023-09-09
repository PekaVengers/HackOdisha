import { Form } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BASE_URL } from "../utils/baseURL";
import axios from "axios";

export async function action({request}) {
  const formData = await request.formData();
  const res = await axios.post(`${BASE_URL}/api/plant-tree/`, formData)
  console.log(res);
  return null;
}

export default function TreePlantation() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>Did you just plant a tree? Share with us!</div>
      <Form method="post" encType="multipart/form-data">
        <div>
          <input name="image" type="file" accept="image/png, image/jpeg" />
        </div>
        <div>
          <input name="name" type="hidden" value={user.name} />
        </div>
        <div>
          <input name="email" type="hidden" value={user.email} />
        </div>
        <div>
          <input name="profile" type="hidden" value={user.picture} />
        </div>
        <button>Submit</button>
      </Form>
    </div>
  )
}
