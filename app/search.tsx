import Symbol from '@/components/Symbol'
import SearchForm from '@/components/SearchForm'

function SearchSection() {

    return (
        <div id='explore' className="rounded-xl shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_20px_#08f] shadow-slate-500 flex flex-col gap-5 pt-10 p-5 lg:my-10 lg:p-10 mx-auto">
            <div className="font-bold text-4xl">Explore</div>
                <SearchForm />
            <div>

            <div className="font-bold text-2xl mb-4">Popular Stocks</div>
            
            <div className='flex flex-wrap gap-x-6 gap-y-3'>
                <div> NVIDIA Corporation <Symbol symbol="NVDA" /></div>
                <div> Apple Inc. <Symbol symbol="AAPL" /></div>
                <div> Microsoft Corporation <Symbol symbol="MSFT" /></div>
                <div> Alphabet Inc. <Symbol symbol="GOOG" /> <Symbol symbol="GOOGL" /></div>
                <div> Amazon.com, Inc. <Symbol symbol="AMZN" /></div>
                <div> Meta Platforms, Inc. <Symbol symbol="META" /></div>
                <div> Tesla, Inc. <Symbol symbol="TSLA" /></div>
                <div> Berkshire Hathaway Inc. <Symbol symbol="BRK.A"/><Symbol symbol="BRK.B"/></div>
                <div> Taiwan Semiconductor Manufacturing Company Limited <Symbol symbol="TSM" /></div>
            </div>
            </div>
        </div>
    )
}

export default SearchSection