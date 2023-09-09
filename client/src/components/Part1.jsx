import React from 'react'
import heroImg from "../Images/hero_img.png"
import leafImg from "../Images/mapple_leaf.webp"
import mappleLeavesImg from "../Images/edibleleaves2_orig.png"
import { Link } from "react-router-dom"

const Part1 = () => {
  return (
    <div className="w-full flex justify-center items-center bg-slate-300 opacity-100 transition-opacity duration-250 ease-in">
      <div className="max-w-[1400px] w-full px-[20px] py-[10px] md:px-3">
        <div className="hero_container flex-row  lg:flex-col w-full mt-7 flex justify-between items-center gap-[30px]">
          <div className="hero_sub_container flex flex-col lg:justify-center lg:items-center gap-[15px]">
            <h1 className="hero_heading text-6xl font-normal lg:text-center  max-w-[700px] lg:text-[40px] lg:font-medium lg:max-w-[70vw] md:max-w-[90vw]">
              Take a moment today to plant a tree
            </h1>
            <p className="hero_para text-2xl max-w-[700px] lg:text-[20px] lg:max-w-[70vw] md:max-w-[90vw] break-words">
              Your simple action today ensures a greener,
              healthier world for the generations to come.
            </p>
            <div className="hero_btn flex items-center gap-3">
              <img
                src={leafImg}
                alt="A red-brown mapple leaf"
                className="hero_btn_leaf_small_device w-48 hero_img hidden lg:inline-block lg:w-[60px]"
              />
              <Link
                className="inline-block rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                to="/plant-tree"
              >
                Plant a Tree
              </Link>
              <img
                src={leafImg}
                alt="A red-brown mapple leaf"
                className="hero_btn_leaf w-16 lg:w-12"
              />
            </div>
          </div>
          <div className="hero_img_container relative">
            <img
              src={mappleLeavesImg}
              alt=""
              className="mapple_img_decor w-32 transform rotate-[77deg] absolute -bottom-6 lg:hidden"
            />
            <img
              src={heroImg}
              alt="Hero image"
              className="hero_img w-[500px] lg:w-[350px] md:w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Part1
