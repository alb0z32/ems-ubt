import React from 'react'
import ResponsivePieChart from './ResponsivePieChart';
import { FaArrowDown } from "react-icons/fa6";
const PieChart = () => {
    let data = [
        {
            "id": "paisje",
            "label": "paisje",
            "value": 107.17,
            "percentage": 35,
        },
        {
            "id": "ngrohje",
            "label": "ngrohje",
            "value": 153.1,
            "percentage": 50,
        },
        {
            "id": "ndriçim",
            "label": "ndriçim",
            "value": 45.93,
            "percentage": 15,
        },
        {
            "id": "të tjera",
            "label": "të tjera",
            "value": 11,
            "percentage": 15,
        }
    ]
    let datasum = data.reduce((acc,nextval)=>acc+nextval.value,0);

    return (
        <div className="chart-container p-6 md:w-2/3 lg:w-1/2 w-full ml-4 mr-4 bg-white h-96 font-bold rounded-xl flex flex-col">
        <div className="title w-full">
          <p>Shpenzimet totale javore</p>
         <p className='flex'>{datasum.toFixed(2)} €   <span className='ml-4 text-green-400 flex'><FaArrowDown className='mt-1'/> -42.50€</span></p> 
        </div>
        <div className="thechart w-full h-full">
        <ResponsivePieChart data={data} datasum={datasum}/>
        </div>
      </div>

    )
}

export default PieChart


