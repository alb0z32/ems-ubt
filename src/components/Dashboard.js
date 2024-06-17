import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import SolarGraph from './SolarGraph';
import Problems from './Problems';
import Switches from './Switches';
const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container w-4/5 flex min-h-screen">
        <div className="p-5 w-full flex flex-col min-h-screen">
          <div className="dashboard-container-row mb-5 w-full flex justify-evenly ">
            <LineChart />
            <PieChart />

          </div>
          <div className="dashboard-container-row mt-5 w-full flex justify-evenly ">
            <BarChart />
            <SolarGraph/>

          </div>
          <div className="dashboard-container-row mt-5 w-full flex justify-evenly ">
            <h1 className='text-black text-[32px] font-bold'>KONTROLLI</h1>
          </div>
          <div className="dashboard-container-row mt-5 w-full flex justify-evenly ">
            <Problems />
        <Switches/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard