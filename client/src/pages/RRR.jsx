import { Form } from "react-router-dom";
import axios from "axios";

export async function action({ request }) {
  const formData = await request.formData();
  const method = formData.get('method')
  const description = formData.get('description')
  console.log("Submitting...")
  const options = {
    method: 'POST',
    url: 'https://chatgpt-api8.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '4b4c7ad797msh5946c50a0b3a17ep1e82bfjsn19a40c9c3915',
      'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
    },
    data: [
      {
        content: `Provide ways to ${method} the product described by the user`,
        role: 'system'
      },
      {
        content: description,
        role: 'user'
      }
    ]
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
      console.log(response.data['text']);
      return response.data['text'];
  } catch (error) {
      console.error(error);
  }
  return null;
}

const RRR = () => {
  return (
    <div>
      <section className=" bg-slate-200 text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              <span className="text-black">RRR</span>
              <span className=" text-black sm:block">Reduce, Reuse and Recycle</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              This feature allows you to: Enter the condition of your product and what you want to do with it, and according to your choice, our smart engine recommends what is the best way you can recycle it or maybe dispose of it.
            </p>
            <Form method="post">
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <textarea
                  id="OrderNotes"
                  className="mt-2 px-2 py-2 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm"
                  rows="4"
                  style={{ resize: 'none' }}
                  placeholder="Enter the condition of your Product ..."
                  name="description"
                ></textarea>
                <div className="main flex border rounded-full overflow-hidden m-4 select-none">
                  <div className="title py-3 my-auto px-5 bg-green-600 text-white text-sm font-semibold mr-3">Choice</div>
                  <label className="flex radio p-2 cursor-pointer">
                    <input className="my-auto transform scale-125" type="radio" name="method" value={"reduce"} />
                    <div className="title px-2">Reduce</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input className="my-auto transform scale-125" type="radio" name="method" value={"reuse"} />
                    <div className="title px-2">Reuse</div>
                  </label>

                  <label className="flex radio p-2 cursor-pointer">
                    <input className="my-auto transform scale-125" type="radio" name="method" value={"dispose"} />
                    <div className="title px-2">Dispose</div>
                  </label>
                </div>
              </div>
              <button
                className="inline-block rounded-full bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-600"
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RRR;
