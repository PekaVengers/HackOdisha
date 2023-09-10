import React from 'react'
import calcImg from "../../assets/calc.png"
import { useState } from 'react';

const ElectricityCalc = () => {
  const [data, setData] = useState({
    electricity: 0,
    price: 0,
    hrs: 0,
  });

  const electricity = data.electricity,
  price = data.price,
  hrs = data.hrs;

  const [consumption, setConsumption] = useState(null)

  function handleChange(event) {
    setData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  function calculateCost(e) {
    e.preventDefault()
    const powerInKWh = electricity/1000;
    const energyConsumption = powerInKWh * hrs;
    const totalCost = energyConsumption * price;
    setConsumption(totalCost)
  }


  return (
    <div className="w-full flex justify-center items-center bg-slate-300 opacity-100 transition-opacity duration-250 ease-in">
      <div className="max-w-[1400px] w-full px-[20px] py-[10px] md:px-3  min-h-[80vh]">
        <form className="flex-col w-full mt-7 flex justify-center items-center gap-[30px]">
          <div className="flex justify-center items-center gap-4">
            <h1 className="text-3xl md:text-5xl">
              Electricity Calculator
            </h1>
            <img src={calcImg} alt="calculator" className="w-10 md:w-14" />
          </div>

          <div className="flex justify-center flex-col gap-4">
            <div className="flex gap-3 justify-between items-center">
              <label htmlFor="electricity" className="text-xl">
                Electricity consumed in Watts
              </label>
              <input
                type="number"
                className="p-2 text-xl border-2 border-black rounded-md"
                min={0}
                max={5000}
                value={data.electricity}
                id="electricity"
                name='electricity'
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 justify-between items-center">
              <label htmlFor="hrs" className="text-xl">Usage in hrs</label>
              <input
                type="number"
                className="p-2 text-xl border-2 border-black rounded-md"
                min={0}
                max={1000}
                value={data.hrs}
                id='hrs'
                name='hrs'
                onChange={handleChange}
              />
            </div>
            <div className="flex gap-3 justify-between items-center">
              <label htmlFor="price" className="text-xl">Electricity Price in Rs(per kWh)</label>
              <input
                type="number"
                className="p-2 text-xl border-2 border-black rounded-md"
                min={0}
                max={1000}
                value={data.price}
                id='price'
                name='price'
                onChange={handleChange}
              />
            </div>
            <button
              className="border-2 p-3 px-6 md:px-8 rounded-[4px] text-xl md:text-2xl bg-blue-600 text-white hover:bg-blue-500 transition-all active:scale-[.8]"
              onClick={calculateCost}
            >
              Calculate
            </button>
          </div>
        </form>

        {consumption && (
          <div className="w-full mt-20 mb-8 flex justify-center items-center gap-[30px]">
            <h4 className="text-3xl">
              Total cost for using the device: 
            </h4>
            <p className="text-3xl font-bold">
              {consumption ? consumption : 0}Rs
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


export default ElectricityCalc