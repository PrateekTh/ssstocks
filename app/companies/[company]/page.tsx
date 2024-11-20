
async function CompanyPage({params}: {params: {company:string}}) {

    const urlParams = await params;

    return (
        <div className='flex p-5 md:p-10 mx-auto w-screen'>
            <div className='text-3xl'>
                Individual Company Details Page for {urlParams.company}
            </div>
        </div>
    )
}

export default CompanyPage