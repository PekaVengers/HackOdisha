import { useState } from "react"
import {FaArrowCircleUp} from 'react-icons/fa'
import Logo from '../assets/Logo.png'

const Footer = () => {
  const date = new Date();
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 300)
    {
      setVisible(true)
    }
    else if(scrolled <= 300)
    {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <div>
      <footer className="bg-gray-100">
  <div
    className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8"
  >
    <div className="fixed w-full left-1/2 bottom-[40px] h-[20px] text-[3rem] z-10 cursor-pointer text-green-600">
      <FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none',background: 'white'}}/> 
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div className="flex items-center flex-col">
        <img src={Logo} className="h-[8rem] w-[16rem] mt-20" alt="Logo" />
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
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            About
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Services
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Projects
          </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
            Blog
          </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
      Copyright &copy; {date.getFullYear()}. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer

