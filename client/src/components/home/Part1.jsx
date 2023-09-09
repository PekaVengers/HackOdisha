import React from 'react';
import d3 from "../../assets/3d.jpg";
import './Part1.css'; // Create a CSS file for styling

const Part1 = () => {
  return (
    <div className='bg-slate-300'>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-20 py-8 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Take a Step
              <br class="hidden lg:inline-block" />Towards a greener future
            </h1>
            <p class="mb-8 leading-relaxed text-xl font-medium">Your simple action today ensures a greener and healthy world for generations to come. So, take the step forward and believe. Every small effort today creates a brighter, sustainable tomorrow.</p>
            <a
              className="inline-block rounded bg-green-600 px-8 py-3 text-sm font-medium text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="/plant-tree"
            >
              Plant a Tree
            </a>
          </div>
          <div class="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
            <img class="moving-image rounded-full" alt="hero" src={d3} /> {/* Add the "moving-image" class */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Part1;
