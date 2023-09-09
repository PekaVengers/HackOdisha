import React from 'react'
import calcImg from "../../assets/calc.png"

const ElectricityCalc = () => {
  return (
    <div className="w-full flex justify-center items-center bg-slate-300 opacity-100 transition-opacity duration-250 ease-in">
      <div className="max-w-[1400px] w-full px-[20px] py-[10px] md:px-3">
        <div className="flex-col w-full mt-7 flex justify-between items-center gap-[30px]">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-3xl md:text-5xl">
              Electricity Calculator
            </h1>
            <img src={calcImg} alt="calculator" className="w-10 md:w-14" />
          </div>
          <div className="flex justify-center flex-col md:flex-row gap-4">
            <input
              type="number"
              className="p-3 md:p-4 text-lg md:text-xl rounded-md w-[80vw] max-w-[500px]"
            />
            <button
              className="border-2 p-3 px-6 md:px-8 rounded-[4px] text-xl md:text-2xl bg-blue-600 text-white hover:bg-blue-500 transition-all active:scale-[.8]"
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectricityCalc
