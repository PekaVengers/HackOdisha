import { useState, useEffect } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer1 = () => {
  const date = new Date();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <div className='bg-slate-300'> 
      <footer className="text-gray-600 body-font">
        <div className="relative">
          {/* Back to Top Button */}
          <div
            className="fixed bottom-4 right-4 z-10 cursor-pointer text-green-600 w-12 h-12 hover:text-green-800"
            style={{ display: visible ? 'inline' : 'none' }}
            onClick={scrollToTop}
          >
            <FaArrowCircleUp style={{ fontSize: '2.5rem' }} />
          </div>

          {/* Footer Content */}
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-2xl">Planet Care</span>
            </a>
            <p className="text-lg text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 flex items-center">
              © {date.getFullYear()} PlanetCare —
              <a href="https://github.com/PekaVengers/HackOdisha" className="text-gray-900 ml-1 text-2xl" rel="noopener noreferrer" target="_blank">
                <BsGithub />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer1;
