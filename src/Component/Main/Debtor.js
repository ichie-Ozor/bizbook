import React, { useState } from 'react'
import NavBar from '../../Utilities/NavBar'
import Header from '../../Utilities/Header'

function Debtor() {
  const [ debtor, setDebtor ] = useState([])
  const [ debtorInput, setDebtorInput ] = useState({
    date: "",
    description: "",
    category: "",
    qty: "",
    rate: ""
  })

const onChange = (e) => {
  e.preventDefault()
  const { name, value } = e.target
  setDebtorInput({
    ...debtorInput, [name] : value
  })
}

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("see am here", creditorInput)
   if(debtorInput.date === "" && debtorInput.category === "") return 
   setDebtor((prev) => [
    ...prev,
    {
      id: new Date().getMilliseconds(),
      date: debtorInput.date,
      description: debtorInput.description,
      category: debtorInput.category,
      qty: debtorInput.qty,
      rate: debtorInput.rate
    },
  ])
  
  setDebtorInput({
    date: "",
    description: "",
    category: "",
    qty: "",
    rate: ""
  })
    // it should also send data to the backend from here and display it on the page at the same time
  }
  console.log(debtor)

 const renderDebtor = debtor.map((value, id) => {
  const { date, description, category, qty, rate } = value;
  return (
     <tr key={id} className='relative left-60 top-28 mt-2 flex space-x-4'>
      <td className='table-data'>{date}</td>
      <td className='bg-gray-200 w-72 h-10 rounded pt-2 flex justify-center text-xl'>{description}</td>
      <td className='table-data'>{category}</td>
      <td className='table-data'>{qty}</td>
      <td className='table-data'>{rate}</td>
      <td className='table-data'>{rate*qty}</td>
      <button className='w-20 h-8 bg-gray-400 ml-2 relative left-3 top-1 rounded-md text-white font-bold text-lg shadow-xl hover:shadow hover:text-black hover:bg-white'>Delete</button>
     </tr>
  )
 })




  return (
    <div>
      <NavBar />
      <Header />
      <div className='absolute left top-22 '>
        <form className='relative flex  left-56' onSubmit={submitHandler}>
          <input type='date' placeholder='date'className='btn4' name='date' value={debtorInput.date} onChange={onChange}/>
          <input type='text' placeholder='Goods Description' className='btn4' name='description' value={debtorInput.description} onChange={onChange}/>
          <input type='text' placeholder='Category' className='btn4' name='category' value={debtorInput.category} onChange={onChange}/>
          <input type='number' placeholder='Qty' className='btn4' name='qty' value={debtorInput.qty} onChange={onChange}/>
          <input type='number' placeholder='Rate N'className='btn4' name='rate' value={debtorInput.rate} onChange={onChange}/>
          <button type='submit' className='w-40 h-12 bg-gray-400 ml-2 relative left-1 top-4 rounded-md text-white font-bold text-lg shadow-xl hover:shadow hover:text-black hover:bg-white'>Submit</button>
        </form>
      </div>
      <table className='relative left-60 top-28 flex space-x-4'>
        <th className='table-header'>Date</th>
        <th className='bg-gray-200 w-72 h-10 rounded pt-2'>Goods Description</th>
        <th className='table-header'>Category</th>
        <th className='table-header'>Quantity</th>
        <th className='table-header'>Rate</th>
        <th className='table-header'>Total</th>
      </table>
      <div>{renderDebtor}</div>
    </div>
  )
}

export default Debtor
