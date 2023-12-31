import React from 'react';
import { Link } from 'react-router-dom';
import rrr from '../../assets/RRR.png';
import './Part1.css';

const Part2 = () => {
  return (
    <div className='bg-gray-100'>
      <section className='text-gray-600 body-font py-2'>
        <div className='container mx-auto flex px-8 md:flex-row flex-col items-center'>
          <div className='px-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='text-4xl md:text-5xl mb-4 font-bold text-gray-900'>RRR - Reduce, Reuse, Recycle</h1>
            <p className='mb-8 leading-relaxed text-xl font-normal md:w-3/4 text-center md:text-left'>
              Enter the name of any product, and we&apos;ll provide you with clear guidance on how to dispose of it safely and responsibly using the RRR (Reduce, Reuse, and Recycle) principles.
            </p>
            <div className='flex justify-center'>
              <Link
                className='group relative inline-flex items-center rounded-lg bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500 hover:bg-green-700'
                to='/RRR'
              >
                <span className='absolute -left-12 group-hover:left-4'>
                  <svg
                    className='h-5 w-5 rtl:rotate-180'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </span>
                <span className='text-sm font-medium transition-all group-hover:ml-4'>Explore</span>
              </Link>
            </div>
          </div>
          <div className='mr-10 lg:max-w-md lg:w-full md:w-1/2 w-3/6'>
            <img className='object-cover object-center rounded-full moving-image-1' alt='hero' src={rrr} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Part2;
