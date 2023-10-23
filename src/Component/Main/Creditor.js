import React from 'react'
import NavBar from '../../Utilities/NavBar'
import Header from '../../Utilities/Header'

function Creditor() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className='relative left-96 top-56 w-20 bg-red-500'>
        Creditor
      </div>
    </div>
  )
}

export default Creditor
