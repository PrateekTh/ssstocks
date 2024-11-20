"use client"
import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useStore } from '@/lib/store'
import Symbol from '@/components/Symbol'

function SearchSection() {
    const [inputValues, setInputValues] = useState<Record<string, string>>({});
    const [counter, setCounter] = useState(1);
    const { companies, setCompanies } = useStore()

    function onAddCompany(){
        if(counter < 5) setCounter(counter + 1);
        else alert("Free Version")
    }

    function onRemoveCompany(){
        if(counter > 0) {
            const key = (counter-1).toString()
            const { [key]: foo, ...rest } = inputValues;
            setCounter(counter - 1);
            setInputValues(rest);
        }
    }

    function onInputChange(val : string, index : number){
        const abc : Record< string, string> = {};
        abc[index] = val;
        setInputValues({ ...inputValues, ...abc });
        console.log(inputValues);
    };

    function onCompare(){
        setCompanies(inputValues);
        console.log(companies)
    };

    return (
        <div id='searchSection' className="flex flex-col gap-5 pt-10 lg:my-10 lg:w-5/6 mx-auto">
            <div className="font-bold text-4xl">Explore</div>
            <form id='searchForm' className='text-black'>
                <div className='flex flex-wrap lg:flex-row gap-6 '>
                {Array.from(Array(counter)).map((c, index) => {
                    return (
                        <input
                            onChange={(e)=> onInputChange(e.target.value, index)}
                            key={index}
                            className='p-3 w-40 text-sm rounded-lg focus:outline-1 focus:outline-black placeholder:italic'
                            type="text"
                            placeholder='ssymbol'
                        ></input>
                    );
                })}
                    
                </div><br/>
                <div>
                    <Button type='button' className='rounded-full mr-2' variant={"secondary"} onClick={onAddCompany}> <Plus/> </Button>
                    <Button type='button' className='rounded-full mx-2' variant={"secondary"} onClick={onRemoveCompany}> <Minus/> </Button>
                </div>
                <br/>
                <Button type='button' variant={"secondary"} onClick={onCompare}> Compare </Button>
            </form>

            <div>
            <div className="font-bold text-2xl mb-4">Popular Stocks</div>
            <div className='flex flex-wrap gap-x-6 gap-y-3'>
                <div> NVIDIA Corporation <Symbol symbol="NVDA" /></div>
                <div> Apple Inc. <Symbol symbol="AAPL" /></div>
                <div> Microsoft Corporation <Symbol symbol="MSFT" /></div>
                <div> Alphabet Inc. <Symbol symbol="GOOG" /> <Symbol symbol="GOOGL" /></div>
                <div> Amazon.com, Inc. <Symbol symbol="AMZN" /></div>
                <div> Meta Platforms, Inc. <Symbol symbol="META" /></div>
                <div> Tesla, Inc. <Symbol symbol="TSLA" /></div>
                <div> Berkshire Hathaway Inc. <Symbol symbol="BRK.A"/><Symbol symbol="BRK.B"/></div>
                <div> Taiwan Semiconductor Manufacturing Company Limited <Symbol symbol="TSM" /></div>
            </div>
            

            </div>
        </div>
    )
}

export default SearchSection