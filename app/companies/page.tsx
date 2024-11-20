import React from 'react'
import { getAllCompanies } from '@/actions/actions'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import C_TableRow from './C_TableRow';
import companyDetails from '@/types/companyDetails';

async function CompanyList() {

    const companyData: companyDetails[] = await getAllCompanies();

    return (
        <div className='p-5 md:p-10 mx-auto'>
            <div className='text-3xl'>
                Top Companies by Market Cap       
            </div>
            <Table className='md:w-4/5'>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Symbol</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Industry</TableHead>
                        <TableHead className="text-right">Market Cap</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companyData.map((company)=> <C_TableRow key={company.symbol} company={company} />)}
                </TableBody>
            </Table>
        </div>
  )
}

export default CompanyList