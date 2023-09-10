import { useState, useEffect } from "react";
import { FaArrowCircleUp } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Footer = () => {
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
    <div>
      <footer className="bg-slate-300">
        <div className="mx-auto max-w-screen-xl px-4 py-0 sm:px-6 lg:px-8 relative">
          <div className="fixed bottom-4 right-4 z-10 cursor-pointer text-green-600 w-12 h-12 hover:text-green-800">
            <FaArrowCircleUp
              onClick={scrollToTop}
              style={{ display: visible ? 'inline' : 'none', fontSize: '2.5rem' }} 
            />
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div className="flex items-center flex-col">
              <img src={Logo} className="h-[9rem] w-[17rem] mt-20" alt="Logo" />
              <p
                className="mx-auto max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
              >
                Prioritizing sustainability through responsible environmental stewardship and conservation to protect Earth's ecosystems and resources for future generations.
              </p>
            </div>

            <ul
              className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
            >
              <li>
                <a className="text-slate-500 transition hover:text-slate-900" href="/">
                  Home
                </a>
              </li>

              <li>
                <a className="text-slate-500 transition hover:text-slate-900" href="/rrr">
                  RRR
                </a>
              </li>

              <li>
                <a className="text-slate-500 transition hover:text-slate-900" href="/save-at-home">
                  Save At Home
                </a>
              </li>

              <li>
                <a className="text-slate-500 transition hover:text-slate-900" href="/create-event">
                  Events
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-slate-700 lg:text-right">
            Copyright &copy; {date.getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
