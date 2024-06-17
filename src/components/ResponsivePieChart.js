import React from 'react'
import { ResponsivePie } from '@nivo/pie'
const ResponsivePieChart = ({data,datasum}) => {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 20, right: 80, bottom: 60, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            valueFormat={(value)=>`${value}€`}
            colors={["hsl(143, 100%, 38%)", "hsl(352, 91%, 45%)", "hsl(190, 100%, 42%)","hsl(60, 100%, 50%)"]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.2
                    ]
                ]
            }}
            tooltip={(e) => (
                <div className='p-2 bg-white border rounded'>
                    <strong> {e.datum.data.id} : {datasum > 0 && Math.floor(e.datum.data.value /datasum*100)}%</strong>
                </div>
            )}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        2
                    ]
                ]
            }}

            legends={[
                {
                    anchor: 'bottom',
                    direction: 'row',
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: '#999',
                    itemDirection: 'left-to-right',
                    itemOpacity: 1,
                    symbolSize: 18,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ]}
        />

    )
}

export default ResponsivePieChart


