import React from 'react'

function NavBar() {
  return (
    <div className='h-screen bg-primary-500 w-48 absolute grid top-0 justify-items-center'>
      <div className='absolute font-ms text-white text-8xl font-black flex top-5'>
         J <div className='text-7xl top-2 relative -left-1 block '>kl<span className='text-xl -top-3 relative block'>stores</span></div>
      </div>
      <div className='text-white relative top-36 block justify-evenly h-64 '>
        <ul className='text-2xl '>
          Accounting
        </ul>
        <ul className='text-base mt-2'>
          Statement
        </ul>
        <ul className='text-base mt-2'>
          Credit Balance
        </ul>
        <ul className='text-base mt-2'>
          Debit Balance
        </ul>
        <ul className='text-xl mt-2'>
          Stocks
        </ul>
        <ul className='text-xl mt-2'>
          Sign Out
        </ul>
      </div>
    </div>
  )
}

export default NavBar
