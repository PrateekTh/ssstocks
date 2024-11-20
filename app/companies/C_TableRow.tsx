"use client"

import React from 'react'
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"
import companyBasicDetails from '@/types/companyBasicDetails'
import { useRouter } from 'next/navigation'

function C_TableRow(
    {company, key} : {
        company: companyBasicDetails, 
        key:string
    }
) {
    const router = useRouter();
    function handleRowClick(symbol: string){
        router.push("/companies/" + company.symbol)
        console.log(symbol)
    }
    return (
        <TableRow key={key} className='cursor-pointer duration-300 hover:text-teal-400' onClick={() => handleRowClick(company.symbol)}>
            <TableCell className="font-bold">{company.symbol}</TableCell>
            <TableCell className='text-xs md:text-sm'> {company.name}</TableCell>
            <TableCell className='text-xs md:text-sm'> {company.industry}</TableCell>
            <TableCell className="text-right">{company.marketCap}</TableCell>
        </TableRow>
    )
}

export default C_TableRow