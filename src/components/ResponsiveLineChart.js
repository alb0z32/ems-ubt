import React from 'react'
import { ResponsiveLine } from '@nivo/line'
const ResponsiveLineChart = ({data}) => {
  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 20, bottom: 30, left: 30 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false 
        }}
        areaBaselineValue={15}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        tooltip={(e) => (
            <div className='p-2 bg-white border rounded'>
                <strong>{e.point.data.x}: {e.point.data.y} KiloWatt</strong>
            </div>
        )}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        enablePoints={true}
        enableArea={true}
        pointSize={10}
        colors={["hsl(190, 100%, 42%)"]}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={0}
        enableTouchCrosshair={true}
        useMesh={true}
    />
)
}

export default ResponsiveLineChart