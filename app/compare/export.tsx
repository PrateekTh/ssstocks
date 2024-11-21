"use client"
import React, { useState, useEffect } from 'react'
import { Parser } from '@json2csv/plainjs';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useStore } from '@/lib/store';

function Export() {

    const {companyDetails, companySeries} = useStore();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [downloadDataType, setDownloadDataType] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const download = (data : string) => {
        const blob = new Blob([data], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name}.csv`;
        
        a.click();
    }

    function onDownload(){
        if(!companyDetails.length) return
        try {
            const opts = {};
            const parser = new Parser(opts);
            let csv = "";
            if(downloadDataType === "details"){
                csv = parser.parse(companyDetails)
            } else if(downloadDataType === "daily"){
                csv = parser.parse(companySeries)
            }

            download(csv);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if(name.length && description.length && downloadDataType.length){
            setIsDisabled(false)
        }else setIsDisabled(true)
    }, [name, description, downloadDataType]);
    return (
    <div>

        <Sheet>
            <SheetTrigger className='border px-4 py-2 text-sm font-bold rounded-lg bg-muted hover:border-gray-500'> Export </SheetTrigger>
            <SheetContent side={'left'}>
                <SheetHeader>
                <SheetTitle>Export Data</SheetTitle>
                <SheetDescription>
                    Please complete the following steps
                </SheetDescription>
                </SheetHeader>

                <div className='flex flex-col gap-4 py-6 h-[90%] justify-between'>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <div className='font-bold'>File Name</div> <br/>
                            <input className='bg-muted p-2 w-full rounded-lg' value={name} onChange={(e)=> setName(e.target.value)}/><br/>
                        </div>
                        
                        <div>
                            <div className='font-bold'>Description</div> <br/>
                            <textarea rows={5} className='bg-muted p-2 w-full rounded-lg' value={description} onChange={(e)=> setDescription(e.target.value)}/><br/>
                        </div>

                        <Select onValueChange={(val)=> {
                            console.log(downloadDataType) 
                            setDownloadDataType(val)}}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="select a dataset to download"/>
                        </SelectTrigger>
                        <SelectContent className=''>
                            <SelectItem value="daily"> Series </SelectItem>
                            <SelectItem value="details"> Details </SelectItem>
                        </SelectContent>
                    </Select>

                    </div>
                    <button className='flex-end bg-gray-300 text-black disabled:text-white disabled:bg-muted p-3 rounded-lg disabled:cursor-not-allowed duration-300' onClick={onDownload} disabled={isDisabled}> Download </button>
                </div>
                
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default Export