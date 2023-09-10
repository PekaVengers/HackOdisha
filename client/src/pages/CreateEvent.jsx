import { Form } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BASE_URL } from "../utils/baseURL";
import axios from "axios";

export async function action({ request }) {
  const formData = await request.formData();
  const res = await axios.post(`${BASE_URL}/api/events/`, formData)
  console.log(res);
  return null;
}

export default function CreateEvent() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated) {
    return <div>Loading...</div>
  }

  return (
    <div className="bg-gray-100 p-8  flex items-center direction flex-col">
      <h2 className="text-[30px] font-semibold mb-4 font-sans">Create Event</h2>
      <Form method="post" className="max-w-lg  shadow-md p-7 box-border">
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full md:w-full px-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="eventName"
            >
              Event Name
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
              id="eventName"
              type="text"
              name="event-name"
              placeholder="Web3 Meetup"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full px-4">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="eventLocation"
            >
              Event Location
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
              id="eventLocation"
              type="text"
              name="location"
              placeholder="Ex: New Delhi"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="eventTime"
            >
              Event Time
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
              id="eventTime"
              type="text"
              name="time"
              placeholder="DD-MM-YYYY"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="organizationName"
            >
              Organization Name
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
              id="organizationName"
              type="text"
              name="organization"
              placeholder="Major League Hacking"
            />
          </div>
        </div>
        <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">Event Description</label>
        <textarea name="description" id="message" rows="4" className="block p-2.5 w-full text-lg text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:bg-white" placeholder="Describe details about the event..."></textarea>

        <div>
          <input name="profile" type="hidden" value={user.picture} />
        </div>
        <div>
          <input name="name" type="hidden" value={user.name} />
        </div>
        <div>
          <input name="email" type="hidden" value={user.email} />
        </div>

        <div className="text-center">
          <button
            className="bg-green-500 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Create Event
          </button>
        </div>
      </Form>
    </div>
  );
}
