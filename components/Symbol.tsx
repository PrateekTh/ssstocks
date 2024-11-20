import React from 'react'

function Symbol({symbol}: {symbol:string}) {
  return (
    <span className='border border-teal-700 font-bold px-2 py-1 rounded-md hover:bg-teal-400 hover:text-black'> {symbol} </span>
  )
}

export default Symbol