import React from 'react'

function CompanyPage({params}: {params: {company:string}}) {

    
    return (
        <div className='flex p-5 md:p-10 mx-auto w-screen'>
            <div className='text-3xl'>
                Individual Company Details Page for {params.company}
            </div>
        </div>
    )
}

export default CompanyPage