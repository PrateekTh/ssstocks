"use client"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

function SearchSection() {


    function onAddCompany(){
        console.log("Adding another textbox")
    }

    return (
        <div id='searchSection' className="flex flex-col gap-5 my-2 lg:my-10 lg:w-5/6 mx-auto">
            <div className="font-bold text-4xl">Search</div>
            <form id='searchForm' className='text-black'>
                <div className='flex flex-col lg:flex-row gap-6 '>
                    <input className='p-2 rounded-lg focus:outline-1 focus:outline-black' type='text'/>
                    <input className='p-2 rounded-lg focus:outline-1 focus:outline-black' type='text'/>
                    <input className='p-2 rounded-lg focus:outline-1 focus:outline-black' type='text'/>
                    <div>
                    <Button type='button' className='rounded-full' variant={"secondary"} onClick={onAddCompany}> <Plus/> </Button>
                    </div>
                </div><br/>
                <Button type='button' variant={"secondary"}> Compare </Button>
            </form>


        </div>
    )
}

export default SearchSection