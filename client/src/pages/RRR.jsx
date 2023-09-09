import { Form } from "react-router-dom";
import { BASE_URL } from "../utils/baseURL";
import axios from "axios";

export async function action({ request }) {
  const formData = await request.formData();
  const res = await axios.post(`${BASE_URL}/api/rrr/`, formData)
  console.log(res);
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
            <form>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <textarea
                id="OrderNotes"
                className="mt-2 px-2 py-2 w-full rounded-lg border-gray-200 shadow-sm sm:text-sm"
                rows="4"
                style={{resize:'none'}}
                placeholder="Enter the condition of your Product ..."
              ></textarea>

              {/* <a
                className="inline-block rounded bg-green-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-600"
                href="/download"
              >
                Reduce
              </a>

              <a
                className="inline-block rounded bg-green-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-600"
                href="/download"
              >
                Reuse
              </a>

              <a
                className="inline-block rounded bg-green-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-600"
                href="/download"
              >
                Dispose 
              </a> */}
              <div class="main flex border rounded-full overflow-hidden m-4 select-none">
                <div class="title py-3 my-auto px-5 bg-green-600 text-white text-sm font-semibold mr-3">Choice</div>
                <label class="flex radio p-2 cursor-pointer">
                  <input class="my-auto transform scale-125" type="radio" name="sfg" />
                  <div class="title px-2">Reduce</div>
                </label>

                <label class="flex radio p-2 cursor-pointer">
                  <input class="my-auto transform scale-125" type="radio" name="sfg" />
                  <div class="title px-2">Reuse</div>
                </label>

                <label class="flex radio p-2 cursor-pointer">
                  <input class="my-auto transform scale-125" type="radio" name="sfg" />
                  <div class="title px-2">Dispose</div>
                </label>

                

              </div>
              
            </div>
            <a
                className="inline-block rounded-full bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-600"
                href="/download"
              >
                Submit 
              </a>
              </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RRR;
