"use client"

import React, { useState } from 'react'
import { 
    ChartConfig, 
    ChartContainer, 
    ChartTooltip, 
    ChartTooltipContent,
    ChartLegend, 
    ChartLegendContent
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import ChartController from './chartController'
import { useStore } from '@/lib/store'
import { chartProps, chartColors } from './render';
import chartPropsTypes from "@/types/chartProps"
import customChartConfig from '@/types/customChartConfig'
import chartData from '@/types/chartData'

const testChartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const testChartData = [
    { prop: "January", desktop: 186, mobile: 80 },
]

function Spotlight() {

    const { companyDetails } = useStore();
    const [chartData, setChartData] = useState<chartData[]>(testChartData);
    const [chartConfig, setChartConfig] = useState<customChartConfig>(testChartConfig);

    function updateChart( metricSet: keyof chartPropsTypes, chartType:string){
        console.log(chartType);
        const data : chartData[] = []
        const config : customChartConfig = {}
        const props = chartProps[metricSet]
        props.map((prop)=>{
            const obj :Record<string, string | number> = {};
            companyDetails.map((val, key)=> {
                obj[key+ "_" + val.Symbol] = Number(val[prop])
                config[key+ "_" + val.Symbol] = { label: val.Symbol, color: chartColors[key]}
            })
            data.push({prop: prop, ...obj})
        })
        // console.log(config)
        // console.log(data)
        setChartData(data)
        setChartConfig(config)
    }

    return (
        <div className='flex flex-col md:flex-row w-full h-full items-center align-middle '>
            <div className='w-1/12'></div>
            <div className='md:w-1/4'>
                <ChartController updateChart={updateChart} />
            </div>
            <div className='w-1/12'></div>
            <ChartContainer config={chartConfig} className="min-h-[200px] md:w-1/2">
                <BarChart accessibilityLayer data={chartData}>
                <XAxis
                    dataKey="prop"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.length > window.innerWidth/(12 * chartData.length)? value.slice(0,6)+"..": value}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <CartesianGrid stroke='#333333' strokeDasharray="3 3" opacity={1} vertical={false} />
                    {companyDetails.map((val, key)=> { 
                        return <Bar key={key + "_bar_" + val.Symbol} dataKey={key+"_"+val.Symbol} fill={chartColors[key]} radius={4} />})}
                </BarChart>
            </ChartContainer>
            <div className='w-1/12'></div>
        </div>
    )
}

export default Spotlight