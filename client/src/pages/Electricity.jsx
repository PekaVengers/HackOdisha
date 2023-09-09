import { useState } from 'react'

const Electricity = () => {
  const [units,setUnits] = useState(0);
  const [category,setCategory] = useState();
  const selection = (e)=> {
    setCategory(e.target.value);
  }

  const agriElecConsumption=()=>
  { 
    const rateRanges = [
        {min: 0,max: 50,rate: 0.25},
        {min: 50,max: 150,rate: 0.55},
        {min: 150,max: 300,rate: 0.80},
        {min: 300,max: 500,rate: 1},
        {min: 500,max: 1000,rate: 2}
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

  const commercialElecConsumption=()=>
  {
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
    <div>
      <form method="post">
        <input type="text" value={units} onChange={(e)=>setUnits(e.target.value)}/>
        <input type="radio" onChange={category === "Agriculture"? "Agriculture" : category === "Residential" ? "Residential" : category === "Commercial" ? "Commercial" : "Select Category!!"}  />
        <input type="radio"/>
        <input type="radio"/>
        <button>Submit</button>
        <h1>Electricity Consumption: {units}</h1>
      </form>
    </div>
  )
}

export default Electricity
