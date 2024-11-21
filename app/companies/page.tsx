import React from 'react'
import { getAllCompanies } from '@/actions/actions'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import C_TableRow from './C_TableRow';
import companyBasicDetails from '@/types/companyBasicDetails';

async function CompanyList() {

    const companyData: companyBasicDetails[] = await getAllCompanies();

    return (
        <div className='py-5 md:p-10 mx-auto'>
            <div className='p-2 lg:p-0 text-2xl font-bold lg:text-3xl'>
                Top Companies by Market Cap       
            </div>
            <Table className='md:w-4/5'>
                <TableCaption>Top 50 companies by Market Cap</TableCaption>
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