import React, { useState, useEffect } from 'react'
import ResponsiveBarChart from './ResponsiveBarChart'
import { updatedIntervalFun } from '../helpers/intervalCall'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const BarChart = () => {
  const [currentWatt, setCurrentWatt] = useState([])
  const [wattArr, setWattArr] = useState([]);
  const [price, setPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);
  const arrMaxLen = 60;
  useEffect(() => {
    if (currentWatt.length <= 0) {
      updatedIntervalFun(setCurrentWatt, currentWatt, setWattArr, arrMaxLen, setPrice, price, setPriceChange);
    }
    const interval = setInterval(() => {
      updatedIntervalFun(setCurrentWatt, currentWatt, setWattArr, arrMaxLen, setPrice, price, setPriceChange);

    }, 1000)
    return () => clearInterval(interval)
  }, [currentWatt])
  console.log("Cmimi eshte: ", price)
  return (
    <div className="chart-container p-6 md:w-2/3 lg:w-1/2 w-full bg-white h-96 font-bold rounded-xl flex flex-col">
      <div className="title">
        <p>Shpenzimet momentale të elektricitetit</p>
        <div className="shpenzimet-container">
          <p className='text-gray-400'>Harxhimet &#8364;/orë</p>
          <p className='flex'>{price.toFixed(2)}	&#8364; <span style={{ color: priceChange <= 0 ? "green" : "red" }} className='ml-4 flex'> {priceChange <= 0 ?<FaArrowDown className="mt-1"/>:<FaArrowUp  className="mt-1"/>}{priceChange.toFixed(2)} &#8364;</span></p>
        </div>
      </div>
      <div className="chart-container h-full w-full">
        <ResponsiveBarChart data={currentWatt.slice(Math.max(currentWatt.length - 7, 1))} />
      </div>
    </div>
  )
}

export default BarChart