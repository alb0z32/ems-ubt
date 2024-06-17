import React from 'react'
import { FaBatteryFull, FaBatteryHalf} from "react-icons/fa6";
const SolarGraph = () => {
    return (
        <div className="chart-container mx-5 p-5 md:w-2/3 lg:w-1/2 w-full bg-white h-96 font-bold rounded-xl flex flex-col">
            <div className="title mb-5">
                <p>Gjendja e paneleve solare</p>
            </div>
            <div className="chart-container mb-7 h-1/2 w-full flex gap-2">
                <div className="solar-panel-container w-1/2 h-full flex-col">
                    <div className="solar border w-full h-full flex flex-wrap">
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-gray-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-gray-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-gray-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                    </div>
                    <p className='text-center'>Blloku 1</p>
                </div>
                <div className="solar-panel-container w-1/2 h-full">
                    <div className="solar border w-full h-full flex flex-wrap">
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-gray-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-gray-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-gray-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                        <div className="solar-cell w-1/6 h-1/5 bg-blue-700 border-white-500 border"></div>
                    </div>
                    <p className='text-center'>Blloku 2</p>
                </div>
            </div>
                <div className="batteries-container w-full h-1/2">
                    <p className='text-lg'>Bateritë solare</p>
                    <div className="batteries w-full h-full flex justify-evenly">
                        <div className="battery-container flex flex-col items-center">
                        <FaBatteryFull className='text-[60px] text-green-500'/>
                        <p>87%</p>
                        </div>
                        <div className="battery-container flex flex-col items-center">
                        <FaBatteryHalf className='text-[60px] text-orange-500'/>
                        <p>43%</p>
                        </div>
                        <div className="battery-container flex flex-col items-center">
                        <FaBatteryFull className='text-[60px] text-green-500'/>
                        <p>100%</p>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default SolarGraph