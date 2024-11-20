import React from 'react'
import { getAllCompanies } from '@/actions/actions'

async function CompanyList() {

    const companyData: {symbol: string, name:string, industry:string, marketCap:string}[] = await getAllCompanies();

    return (
        <div className='p-5 md:p-10 mx-auto w-screen'>
            <div className='text-3xl'>
                List of Companies page           
            </div>
            <div>
                {companyData.map((company)=> <li>{company.name}</li> )}
            </div>
        </div>
  )
}

export default CompanyList