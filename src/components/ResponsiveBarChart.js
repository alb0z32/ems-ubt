import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
const ResponsiveBarChart = ({ data }) => (
    <ResponsiveBar
        data={data}
        keys={["shpenzimet"]}
        indexBy={"minuti"}
        margin={{ top: 50,  bottom: 50,right:10,left:50}}
        padding={0.6}
        valueScale={{ type: "linear"}}
        borderRadius={0}
        indexScale={{type:"band",round:"true"}}
        colors={"#ebb434"}
        enableGridY={false}
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        tooltip={(e)=>(
            <div className='p-2 bg-white border rounded'>
        <strong>{e.data.shpenzimet} Watt</strong>
    </div>
        )}
        axisLeft={{
            tickSize:5,
            tickPadding:5,
            tickRotation:0,
            legend:"Shpenzimet në vat",
            legendPosition:"middle",
            legendOffset:-40
        }}
        axisBottom={{
            tickSize:5,
            tickPadding:5,
            tickRotation:0,
            legend:"Minuta",
            legendPosition:"middle",
            legendOffset:40
        }}
    />
)

export default ResponsiveBarChart