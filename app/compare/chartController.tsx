"use client"
import React, { useEffect, useState } from 'react'
import chartPropsTypes from '@/types/chartProps';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
   

function ChartController({updateChart} : { 
        updateChart : (metricSet: keyof chartPropsTypes, chartType: string)=>void
    }) {
    const [prop, setProp] = useState<keyof chartPropsTypes>("key");
    // const [type, setType] = useState<string>("");

    useEffect(() => {
        // console.log(prop);
        if(prop){
            updateChart(prop, "")
        }
    }, [prop]);


    return (<>
        <div className='flex flex-col gap-4 p-5 shadow-slate-700 md:shadow-[0_0_2px_#aaa,inset_0_0_2px_#aaa,0_0_5px_#52525B,0_0_15px_#52525B,0_0_5px_#52525B] rounded-md hover:shadow-[0_0_2px_#134E4A,inset_0_0_2px_#134E4A,0_0_5px_#52525B,0_0_15px_#52525B,0_0_1px_#52525B]  duration-700'>

            <div className='text-2xl p-2 border-b border-gray-600 font-bold'>Metric Spotlight</div>
            <div className='flex flex-wrap lg:flex-col  gap-6'>
                <div>
                    {/* <div className='mb-2'>Metric</div> */}
                    <Select onValueChange={(val : keyof chartPropsTypes)=> setProp(val)}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="select a metric set" defaultValue={"key"} />
                        </SelectTrigger>
                        <SelectContent className='h-52'>
                            <SelectItem value="key"> Key Metrics</SelectItem>
                            <SelectItem value="marketCap"> Market Cap</SelectItem>
                            <SelectItem value="gross"> Gross Metrics</SelectItem>
                            <SelectItem value="analystRatings"> Analyst Ratings</SelectItem>
                            <SelectItem value="maxRatios">Max Ratios</SelectItem>
                            <SelectItem value="minRatios">Min Ratios</SelectItem>
                            <SelectItem value="other"> Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>         
                
                {/* <div>
                    <div className='mb-2'>Graph Type</div>
                    <Select onValueChange={(val)=> setType(val)}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="select a graph type" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                        </SelectContent>
                    </Select>
                </div> */}
            </div>
        </div>
    </>)
}

export default ChartController