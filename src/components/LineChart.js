import React from 'react'
import ResponsiveLineChart from './ResponsiveLineChart'

const LineChart = () => {
    let data = [
        {
          "id": "japan",
          "color": "hsl(183, 70%, 50%)",
          "data": [
            {
              "x": "E hene",
              "y": 40
            },
            {
              "x": "E marte",
              "y": 32
            },
            {
              "x": "E merkure",
              "y": 25
            },
            {
              "x": "E enjte",
              "y": 56
            },
            {
              "x": "E premte",
              "y": 72
            },
            {
              "x": "E shtune",
              "y": 17
            },
            {
              "x": "E diele",
              "y": 90
            },

          ]
        }
      ]
  return (
    <div className="chart-container p-6 md:w-2/3 lg:w-1/2 w-full bg-white h-96 font-bold rounded-xl flex flex-col">
    <div className="title">
      <p>Shpenzimet e elektricitetit gjate javes se kaluar</p>
    </div>
    <div className="chart-container h-full w-full">
      <ResponsiveLineChart data={data} />
    </div>
  </div>
  )
}

export default LineChart