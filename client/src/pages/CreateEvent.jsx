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
      <h2 className="text-[30px] font-semibold mb-4 font-sans">Create Event</h2>
      <form className="max-w-lg  shadow-md p-7 box-border">
        <div className="flex flex-wrap -mx-4 mb-6">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <label
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 border-gray-300 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
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
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="eventName"
            >
              Event Name
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
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
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="eventLocation"
            >
              Event Location
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
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
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="eventTime"
            >
              Event Time
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
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
              className="block text-gray-700 text-lg font-semibold mb-2"
              htmlFor="organizationName"
            >
              Organization Name
            </label>
            <input
              className="appearance-none text-lg block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-2 leading-tight focus:ring-blue-500 focus:border-blue-500 focus:bg-white"
              id="organizationName"
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              placeholder="Albuquerque"
            />
          </div>
        </div>
        <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">Event Description</label>
        <textarea id="message" rows="4" className="block p-2.5 w-full text-lg text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:bg-white" placeholder="Describe details about the event..."></textarea>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input type="file" 
            className="block w-full 
            text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
          "/>
        </label>
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
