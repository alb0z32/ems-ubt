import React from 'react'
import { FaFireFlameCurved,FaLightbulb  } from "react-icons/fa6";
import { PiWashingMachineFill,PiTelevision } from "react-icons/pi";
import { CgSmartHomeBoiler } from "react-icons/cg";
import { GiFurnace } from "react-icons/gi";
const Switches = () => {
    return (
        <div className="problems-container p-6 md:w-2/3 lg:w-1/2 w-full ml-4 mr-4 bg-white h-96 font-bold rounded-xl flex flex-col">
            <div className="problems-actual w-full">
            <div className="title w-full mb-7">
                <p className='text-blue-600 text-xl'>Kontrollo Paisjet</p>
            </div>
                <div className="problemet w-full flex-wrap h-full flex">
                <div className="problemi flex justify-between items-center p-1 w-1/2" >
                    <p className='flex flex-col'> <span className='text-center text-[20px]'><FaFireFlameCurved className=' text-center mt-1' /> Ngrohja elektrike </span></p>
                    <label class="switchcontrol">
                        <input type="checkbox"/>
                            <span class="slidercontrol round"></span>
                    </label>
                </div>
                <div className="problemi flex justify-between items-center w-1/2">
                    <p className='flex flex-col'> <span className='text-[20px]'><CgSmartHomeBoiler  className='mt-1' /> Boileri</span></p>
                    <label class="switchcontrol">
                        <input type="checkbox"/>
                            <span class="slidercontrol round"></span>
                    </label>
                </div>
                <div className="problemi flex justify-between items-center p-1 w-1/2" >
                    <p className='flex flex-col'> <span className='text-center text-[20px]'><PiWashingMachineFill className=' text-center mt-1' /> Lavatriçja </span></p>
                    <label class="switchcontrol">
                        <input type="checkbox"/>
                            <span class="slidercontrol round"></span>
                    </label>
                </div>
                <div className="problemi flex justify-between items-center p-1 w-1/2" >
                    <p className='flex flex-col'> <span className='text-center text-[20px]'><GiFurnace className=' text-center mt-1' /> Furra elektrike </span></p>
                    <label class="switchcontrol">
                        <input type="checkbox"/>
                            <span class="slidercontrol round"></span>
                    </label>
                </div>
                <div className="problemi flex justify-between items-center p-1 w-1/2" >
                    <p className='flex flex-col'> <span className='text-center text-[20px]'><FaLightbulb  className=' text-center mt-1' /> Dritat e jashtme </span></p>
                    <label class="switchcontrol">
                        <input type="checkbox"/>
                            <span class="slidercontrol round"></span>
                    </label>
                </div>
                <div className="problemi flex justify-between items-center p-1 w-1/2" >
                    <p className='flex flex-col'> <span className='text-center text-[20px]'><PiTelevision  className=' text-center mt-1' /> Ngrohja elektrike </span></p>
                    <label class="switchcontrol">
                        <input type="checkbox"/>
                            <span class="slidercontrol round"></span>
                    </label>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Switches