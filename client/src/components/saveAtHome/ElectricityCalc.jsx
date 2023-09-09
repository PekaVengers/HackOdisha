import React from 'react'
import calcImg from "../../assets/calc.png"
import { useState } from 'react';

const ElectricityCalc = () => {
  const [units, setUnits] = useState(0);
  const [category, setCategory] = useState();
  const [consumption, setConsumption] = useState(null)

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  function calculateElec(e) {
    e.preventDefault()
    if (category === "agriculture") { setConsumption(agriElecConsumption()) }
    else if (category === "residential") { setConsumption(residentialElecConsumption()) }
    else { setConsumption(commercialElecConsumption()) }
  }

  const agriElecConsumption = () => {
    const rateRanges = [
      { min: 0, max: 50, rate: 0.25 },
      { min: 50, max: 150, rate: 0.55 },
      { min: 150, max: 300, rate: 0.80 },
      { min: 300, max: 500, rate: 1 },
      { min: 500, max: 1000, rate: 2 }
    ]
    let bill = 0.0;
    const s = 20;
    for (const range of rateRanges) {
      if (units >= range.min && units < range.max) {
        bill = units * range.rate + s;
        break;
      }
    }

    if (bill === 0.0) {
      alert("Invalid units");
    }

    return bill;
  }

  const residentialElecConsumption = (units) => {
    const rateRanges = [
      { min: 0, max: 50, rate: 1.35 },
      { min: 50, max: 150, rate: 2.15 },
      { min: 150, max: 300, rate: 3.00 },
      { min: 300, max: 500, rate: 3.5 },
      { min: 500, max: 1000, rate: 6 },
    ];

    const s = 35;
    let bill = 0.0;

    for (const range of rateRanges) {
      if (units >= range.min && units < range.max) {
        bill = units * range.rate + s;
        break;
      }
    }

    if (bill === 0.0) {
      alert("Invalid units");
    }

    return bill;
  };

  const commercialElecConsumption = () => {
    const rateRanges = [
      { min: 0, max: 50, rate: 3 },
      { min: 50, max: 150, rate: 4.5 },
      { min: 150, max: 300, rate: 5.5 },
      { min: 300, max: 500, rate: 6.8 },
      { min: 500, max: 1000, rate: 9 },
    ];

    const s = 65;
    let bill = 0.0;

    for (const range of rateRanges) {
      if (units >= range.min && units < range.max) {
        bill = units * range.rate + s;
        break;
      }
    }

    if (bill === 0.0) {
      alert("Invalid units");
    }

    return bill;
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
            <input
              type="number"
              className="p-3 md:p-4 text-lg md:text-xl rounded-md w-[80vw] max-w-[500px]"
              min={0}
              max={1000}
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />
            <div className="flex justify-between mb-8 flex-wrap gap-4">
              <label className="text-lg">
                <input
                  type="radio"
                  name="category"
                  value="agriculture"
                  defaultChecked
                  required
                  onChange={handleCategoryChange}
                />
                Agriculture
              </label>

              <label className="text-lg">
                <input
                  type="radio"
                  name="category"
                  value="residential"
                  required
                  onChange={handleCategoryChange}
                />
                Residential
              </label>

              <label className="text-lg">
                <input
                  type="radio"
                  name="category"
                  value="commercial"
                  required
                  onChange={handleCategoryChange}
                />
                Commercial
              </label>

            </div>
            <button
              className="border-2 p-3 px-6 md:px-8 rounded-[4px] text-xl md:text-2xl bg-blue-600 text-white hover:bg-blue-500 transition-all active:scale-[.8]"
              onClick={calculateElec}
            >
              Calculate
            </button>
          </div>
        </form>

        {consumption && (
          <div className="w-full mt-20 mb-8 flex justify-center items-center gap-[30px]">
            <h4 className="text-3xl">
              Your consumption is:
            </h4>
            <p className="text-3xl font-bold">
              {consumption ? consumption : 0}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}


export default ElectricityCalc