
async function CompanyPage({params}: {params: Promise<{company:string}>}) {

    const {company} = await params;

    // console.log(url)
    // const data = await fetch(url);

    return (
        <div className='flex flex-col gap-5 p-5 md:p-10 w-screen'>
            <div className='text-3xl'>
                Overview of {company}
            </div>
            <div className="rounded-xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_20px_#08f] shadow-slate-500 p-5 lg:w-3/4">
                <span className="font-bold">Description for {company}</span><br/><br/>
                <p>A company, abbreviated as co., is a legal entity representing an association of legal people, whether natural, juridical or a mixture of both, with a specific objective. Company members share a common purpose and unite to achieve specific, declared goals.<br/></p>
                <br/>
                <p>Over time, companies have evolved to have the following features: separate legal personality, limited liability, transferable shares, investor ownership, and a managerial hierarchy. The company, as an entity, was created by the state which granted the privilege of incorporation.</p>
            </div>
        </div>
    )
}

export default CompanyPage