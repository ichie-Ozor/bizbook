import React, { useState } from 'react'
import NavBar from '../../Utilities/NavBar'
import Header from '../../Utilities/Header'

function Stock() {

  const [ sales, setSales ] = useState([])
  const [ salesInput, setSalesInput ] = useState({
    date: "",
    availGoods: "",
    category: "",
    qty: "",
    cPrice: "",
    sPrice: ""
  })

  const onChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setSalesInput({
      ...salesInput, [name] : value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("see am here", creditorInput)
   if(salesInput.date === "" && salesInput.category === "") return 
   setSales((prev) => [
    ...prev,
    {
      id: new Date().getMilliseconds(),
      date: salesInput.date,
      availGoods: salesInput.availGoods,
      category: salesInput.category,
      qty: salesInput.qty,
      cPrice: salesInput.cPrice,
      sPrice: salesInput.sPrice 
    },
  ])

  setSalesInput({
    date: "",
    availGoods: "",
    category: "",
    qty: "",
    cPrice: "",
    sPrice: ""
  })
    // it should also send data to the backend from here and display it on the page at the same time
  }
  console.log(sales)
//////////////Delete/////////////
const deleteHandler = id => {

  console.log(sales.filter(sale => sale.id !== id)) 
}
const editHandler = id => {
  console.log("see me")
} 

   
    const renderSales = sales.map((value, id) => {
      const { sPrice, date, availGoods, category, qty, cPrice } = value;
      return (
         <tr key={id} className='relative left-56 top-28 mt-2 flex space-x-4'>
          <td className='table-data'>{date}</td>
          <td className='bg-gray-200 w-72 h-10 rounded pt-2 flex justify-center text-xl'>{availGoods}</td>
          <td className='table-data'>{category}</td>
          <td className='table-data'>{qty}</td>
          <td className='table-data'>{cPrice}</td>
          <td className='table-data'>{sPrice}</td>
          <button className='w-20 h-8 bg-gray-400 ml-2 relative -left-1 top-1 rounded-md text-white font-bold text-lg shadow-xl hover:shadow hover:text-black hover:bg-white' onClick={deleteHandler}>Delete</button>
          <button className='w-20 h-8 bg-gray-400 ml-2 relative -left-1 top-1 rounded-md text-white font-bold text-lg shadow-xl hover:shadow hover:text-black hover:bg-white' onClick={editHandler}>Edit</button>
         </tr>
      )
     })
  return (
    <div>
      <NavBar />
      <Header />
      <div className='absolute left top-22  container'>
        <form className='relative flex  left-2' onSubmit={submitHandler}>
          <input type='date' placeholder='date'className='btn6' name='date' value={salesInput.date} onChange={onChange}/>
          <input type='text' placeholder='Available Goods' className='btn6' name='availGoods' value={salesInput.availGoods} onChange={onChange}/>
          <input type='text' placeholder='Category' className='btn6' name='category' value={salesInput.category} onChange={onChange}/>
          <input type='number' placeholder='Qty' className='btn6' name='qty' value={salesInput.qty} onChange={onChange}/>
          <input type='number' placeholder='Cost Price N'className='btn6' name='cPrice' value={salesInput.cPrice} onChange={onChange}/>
          <input type='number' placeholder='Selling Price N'className='btn6' name='sPrice' value={salesInput.sPrice} onChange={onChange}/>
          <button type='submit' className='w-40 h-12 bg-gray-400 ml-2 relative left-1 top-4 rounded-md text-white font-bold text-lg shadow-xl hover:shadow hover:text-black hover:bg-white'>Submit</button>
        </form>
      </div>
      <table className='relative left-56 top-28 flex space-x-4'>
        <th className='table-header'>Date</th>
        <th className='bg-gray-200 w-72 h-10 rounded pt-2'>Available Goods</th>
        <th className='table-header'>Category</th>
        <th className='table-header'>Quantity</th>
        <th className='table-header'>Cost Price</th>
        <th className='table-header'>Selling Price</th>
      </table>
      <div>{renderSales}</div>
    </div>
  )
}

export default Stock
