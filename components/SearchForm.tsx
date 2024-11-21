"use client"

import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'
import { useStore } from '@/lib/store'
import { useRouter } from 'next/navigation'
import { getCompanyData } from '@/lib/utils'

function SearchForm() {

	const [inputValues, setInputValues] = useState<Record<string, string>>({});
    const [counter, setCounter] = useState(1);
    const {setCompanies, setDetails, setSeries } = useStore()
    const router = useRouter()

    function onAddCompany(){
        if(counter < 5) setCounter(counter + 1);
        else alert("Maximum Number of companies reached for free version")
    }

    function onRemoveCompany(){
        if(counter > 1) {
            const key = (counter-1).toString()
            const { [key]: foo, ...rest } = inputValues;
            console.log(foo);
            setCounter(counter - 1);
            setInputValues(rest);
        }
    }

    function onInputChange(val : string, index : number){
        const abc : Record< string, string> = {};
        abc[index] = val;
        setInputValues({ ...inputValues, ...abc });
        // console.log(inputValues);
    };

    function onCompare(){
        setCompanies(inputValues);
        // console.log(companies)

        getCompanyData(inputValues).then( (data)=> {
            setDetails(data.detailData);
            setSeries(data.seriesData)
        })

        router.push('/compare')
    };

	return (
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
	)
}

export default SearchForm