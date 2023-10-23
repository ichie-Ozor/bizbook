import React, { useState } from 'react'
import Header from '../Utilities/Header'
import NavBar from '../Utilities/NavBar'
import CreditorModal from '../Utilities/CreditorModal'
import { NavLink } from 'react-router-dom'
import DebtorModal from '../Utilities/DebtorModal'


function Dashboard() {
  const [ openCreditor, setOpenCreditor ] = useState(false)
  const [ openDebtor, setOpenDebtor ] = useState(false)
  const [ showModal, setShowModal ] = useState(false)



  const creditorHandler = (e) => {
    e.preventDefault()
    if(!openCreditor){
    setOpenCreditor(true)
    } else setOpenCreditor(false)
  }

  const debtorHandler = (e) => {
    e.preventDefault()
    if(!openDebtor){
    setOpenDebtor(true)
    } else setOpenDebtor(false)
  }

  const handleOnClose = () => setShowModal(false)




  return (
    <div>
      <NavBar />
      <Header />
       {/*******************  Main body here ***********************/}
       <div className='absolute top-80 left-80'>
        <NavLink to='stock'><button className='btn1'>Stock</button></NavLink>
        <NavLink to='sales'><button className='btn1'>Sales</button></NavLink>
        <button className='btn1' onClick={creditorHandler}>Creditor</button>
        <button className='btn1' onClick={debtorHandler}>Debtor</button>
      </div>
      {openCreditor ? 
      <div className='creditor relative w-1/5 h-24 bg-white flex p-4 shadow-2xl rounded hover:shadow'>
        <div className='btn2' onClick={() => setShowModal(true)}>New Account?</div>
        <NavLink to='creditor'><div className='btn2'>Old Account?</div></NavLink>
      </div> :
      <div></div>
      }
      {openDebtor ? 
      <div className='debtor relative w-1/5 h-24 bg-white flex p-4 shadow-2xl rounded hover:shadow'>
      <div className='btn2' onClick={() => setShowModal(true)}>New Account?</div>
      <NavLink to='debtor'><div className='btn2'>Old Account?</div></NavLink>
    </div> :
      <div></div>
      }
      <CreditorModal onClose={handleOnClose} visible={showModal}/>
      <DebtorModal onClose={handleOnClose} visible={showModal} />
    </div>
  )
}

export default Dashboard
