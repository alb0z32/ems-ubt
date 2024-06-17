import React, { useState } from 'react'
import { FaFireFlameCurved } from "react-icons/fa6";
const Problems = () => {
    const [remove,setRemove] = useState(false);
    const [remove2,setRemove2] = useState(false);
    const [count,setCount] = useState(2);
    return (
        <div className="problems-container p-6 md:w-2/3 lg:w-1/2 w-full ml-4 mr-4 bg-white h-96 font-bold rounded-xl flex flex-col">
            {count>0?<div className="problems-actual w-full">
            <div className="title w-full mb-7">
                <p className='text-red-600 text-xl'>Keta po shkaktojnë shpenzime të panevojshme</p>
            </div>
                <div className="problemet w-full h-full flex flex-col justify-evenly">
                <div className="problemi flex justify-between items-center" style={{animation:remove&& "vanish 2s",display:remove&&"none"}}>
                    <p className='flex flex-col'> <span className='flex text-[20px]'><FaFireFlameCurved className='mt-1' /> Ngrohja elektrike </span> <span className='text-[11px] text-gray-400'>duke qenë temperatura  <span className='text-orange-500'>30&deg;C</span>, <br /> sistemi e cilëson si të panevojshme</span></p>
                    <label class="switch">
                        <input onClick={()=>{setRemove(true);setCount(oldcount=>oldcount-1);}} type="checkbox"/>
                            <span class="slider round"></span>
                    </label>
                </div>
                <div className="problemi flex justify-between items-center" style={{animation:remove2&& "vanish 2s",display:remove2&&"none"}}>
                    <p className='flex flex-col'> <span className='flex text-[20px]'><FaFireFlameCurved className='mt-1' /> Boileri</span> <span className='text-[11px] text-gray-400'>Boileri ka arritur kapacitetin e nxehtësisë</span></p>
                    <label class="switch">
                        <input onClick={()=>{setRemove2(true);setCount(oldcount=>oldcount-1)}} type="checkbox"/>
                            <span class="slider round"></span>
                    </label>
                </div>
            </div>
            </div>
            :<div className="no-problems w-full h-full flex justify-center items-center text-[24px] text-green-600">Nuk ka asnje problem momental!</div>}

        </div>
    )
}

export default Problems