import { useState } from 'react';

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    name: '',
    eventName: '',
    eventLocation: '',
    eventTime: '',
    organizationName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="bg-gray-100 p-8  flex items-center direction flex-col">
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form className="max-w-lg  shadow-md p-7 box-border">
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 border-gray-300 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="eventName"
            >
              Event Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="eventName"
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full px-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="eventLocation"
            >
              Event Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="eventLocation"
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              placeholder="Ex: New Delhi"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="eventTime"
            >
              Event Time
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="eventTime"
              type="text"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              placeholder="Albuquerque"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="organizationName"
            >
              Organization Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              id="organizationName"
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              placeholder="Albuquerque"
            />
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-green-500 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
            type="submit"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}
