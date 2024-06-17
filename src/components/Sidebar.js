import React from 'react'
import {FaSolarPanel, FaSun} from 'react-icons/fa'
import { FaOilWell } from 'react-icons/fa6'
const Sidebar = () => {
  return (
    <div className="w-1/5 border-r-2 border-slate-300 bg-white flex flex-col min-h-screen">
        
        <div className="menu md:pr-5  py-5">
        <div className="side-container w-full h-full font-bold flex flex-col">
    <div className="container-1 p-5">
      <p className='text-center'>Te dhenat rreth objektit</p>
      <img className='rounded-lg' src="https://telegrafi.com/wp-content/uploads/2023/08/8F638F98-12A1-4346-8A11-A2FFD4FB965F-1-780x439.jpg" alt="ubt building" />
    </div>
    <div className="container-1 w-full p-5">
      <h1 className='text-center text-gray-400'>Energjia e shpenzuar gjatë javës:</h1>
      <div className="energy-section">
        <p className='text-center flex justify-evenly my-4 '>Energji të Rinovueshme <FaSolarPanel class="mt-1 text-xl" /></p>
        <p className='text-center my-4 text-[24px] text-yellow-400'>32 kWh</p>

        <p className='text-center my-4 flex justify-center'>Energji fosile <FaOilWell class="text-xl ml-2" /></p>
        <p className='text-center my-4 text-[24px] text-yellow-400'>12 kWh</p>
        <p className='text-green-400 flex justify-center'>+20 kWh energji të pastër</p>
      </div>
    <div className="container-1 w-full p-5">
      <p>Sasia e CO2 e liruar</p>
      <p className='text-orange-400 text-xl'>205.32 ton</p>
    </div>
      <div className="container-1 flex flex-col justify-center">
        <p class="mb-3">Parashikimi i motit për nesër</p>
        <FaSun className='text-[50px] text-yellow-300 self-center' />
        <p className='text-[32px] self-center'>32 &deg;C</p>
      </div>

    </div>
  </div>
        </div>
    </div>
  )
}

export default Sidebar