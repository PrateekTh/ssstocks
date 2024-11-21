"use client"

import {useState} from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import customChartConfig from '@/types/customChartConfig'
import chartData from '@/types/chartData'
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useStore } from "@/lib/store"
import { chartColors } from "./render"

function Series() {
    const {companySeries} = useStore()
    const [timeRange, setTimeRange] = useState("90d");
    const [chartData, setChartData] = useState<chartData[]>([]);
    const [chartConfig, setChartConfig] = useState<customChartConfig>({});

    function updateChart(metric:string){
        if(!companySeries.length) return

        const data : chartData[] = []
        const keys = Object.keys(companySeries[0]["Time Series (Daily)"])

        const config : customChartConfig = { 
            value: {
            label: metric.slice(2, metric.length - 1),
            color: "#2563eb",
            },
        }

        for(let j = 0; j < companySeries.length; j++){
            const val : string = companySeries[j]["Meta Data"]["2. Symbol"]
            config[j + "_" + val] = {label: val, color:chartColors[j]}
        }

        keys.map((date, key) => {
            let flag = true;
            const obj : chartData = {};
            for(let j = 0; j < companySeries.length; j++){
                const val = companySeries[j]["Time Series (Daily)"][date][metric]                
                if(data){
                    obj[j + "_" + companySeries[j]["Meta Data"]["2. Symbol"]] = val
                }else {
                    flag = false;
                    break;
                }
            }
            if(flag) data.push({date:date,...obj})
        })

        setChartConfig(config)
        setChartData(data);
    }

    const filteredData = chartData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date("2024-11-15")
        let daysToSubtract = 90
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })

  return (
    <div>
      <div className=" border-b p-2 py-5 md:flex-row">
        <div className="text-left">
          <div className="text-2xl font-bold"> Series View</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 space-y-0">
            <div className="flex-1"></div>
            <Select onValueChange={(val) => updateChart(val)}>
                <SelectTrigger
                    className="w-[160px] rounded-lg md:ml-auto"
                    aria-label="Select a value"
                >
                    <SelectValue placeholder="select a value" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                    <SelectItem value="1. open" className="rounded-lg"> Open </SelectItem>
                    <SelectItem value="2. high" className="rounded-lg"> High </SelectItem>
                    <SelectItem value="3. low" className="rounded-lg"> Low </SelectItem>
                    <SelectItem value="4. close" className="rounded-lg"> Close </SelectItem>
                    <SelectItem value="5. adjusted close" className="rounded-lg"> Adjusted Close </SelectItem>
                    <SelectItem value="6. volume" className="rounded-lg"> Volume </SelectItem>
                    <SelectItem value="7. dividend amount" className="rounded-lg"> Dividend Amount </SelectItem>
                    <SelectItem value="8. split coefficient" className="rounded-lg"> Split Coefficient </SelectItem>
                </SelectContent>
            </Select>
        
            <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
                className="w-[160px] rounded-lg md:ml-auto"
                aria-label="Select a value"
            >
                <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
                <SelectItem value="90d" className="rounded-lg"> Last 3 months </SelectItem>
                <SelectItem value="30d" className="rounded-lg"> Last 30 days </SelectItem>
                <SelectItem value="7d" className="rounded-lg"> Last 7 days </SelectItem>
            </SelectContent>
            </Select>
        </div>
      </div>
      <div className="px-2 pt-4 md:px-6 md:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
            {companySeries.map((val, key)=>
                <linearGradient 
                    key={key+"_gradient_"} 
                    id={`fill${key+"_"+val["Meta Data"]["2. Symbol"]}`} 
                    x1="0" y1="0" x2="0" y2="1"
                >
                    <stop offset="5%" stopColor={chartColors[key]} stopOpacity={0.8} />
                    <stop offset="95%" stopColor={chartColors[key]} stopOpacity={0.1}/>
                </linearGradient>
            )}

            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />

            <ChartTooltip cursor={false} content={
                <ChartTooltipContent indicator="dot" labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                        })
                }}
                />
              }
            />

            {companySeries.map((val, key)=> { 
                return <Area
                    key={key + "_area_" + val}
                    dataKey={key+"_"+val["Meta Data"]["2. Symbol"]}
                    type="natural"
                    fill={`url(#fill${key+"_"+val["Meta Data"]["2. Symbol"]})`}
                    stroke={chartColors[key]}
                    stackId="a"
                />
            })}

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  )
}

export default Series