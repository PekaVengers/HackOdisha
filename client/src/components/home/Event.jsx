import ev from '../../assets/Events.png';

const Event = () => {
  return (
    <div>
      <section className='text-gray-600 body-font self-center'>
        <div className='container mx-auto flex px-24 py-8 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900'>Events</h1>
            <p className='mb-8 leading-relaxed text-2xl font-normal'>
              Easily craft and promote your eco-friendly events. Connect with fellow environmental enthusiasts
            </p>
            <div className='flex justify-center'>
              <a
                className='group relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500'
                href='/download'
              >
                <span className='absolute -end-full transition-all group-hover:end-4'>
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

                <span className='text-sm font-medium transition-all group-hover:me-4'>Create Event</span>
              </a>
            </div>
          </div>
          <div className='lg:max-w-sm lg:w-full md:w-1/2 w-3/6'>
            <img className='object-cover object-center rounded' alt='hero' src={ev} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Event;
