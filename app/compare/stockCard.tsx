"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useStore } from "@/lib/store"

import { renderDetails } from "./render";
import companyDetails from "@/types/companyDetails";
import { useEffect, useState } from "react"

function StockCard() {

    const [details, setDetails] = useState<companyDetails[]>([]);
    const { companyRef, companyDetails} = useStore();

    useEffect(() => {
        if(companyDetails.length) setDetails(companyDetails)
    }, [companyDetails]);

    return (
        
        <Table>
            <TableCaption></TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="md:w-1/2">Property</TableHead>

                    {details.map((val, key)=> <TableHead key={"tHead"+key}> {val.Symbol} </TableHead> )}
                </TableRow>
            </TableHeader>
            <TableBody>
                {renderDetails.map((keyName :string, keyIndex) =>
                    <TableRow key={"tRow" + keyIndex + keyName}>
                        <TableCell key={"prop" + keyIndex + keyName} className="font-medium">{keyName}</TableCell>
                        {details.map((val : companyDetails, key)=> 
                            <TableCell key={val.Symbol + key + keyName}> {val[`${keyName}`]} </TableCell> )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    )
}

export default StockCard