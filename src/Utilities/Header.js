import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



function Header() {
  const navigate = useNavigate()
  const [ open, setOpen ] = useState(false)
  const [profile, setProfile ] = useState({
    fName: "",
    lName: "",
    bName: "",
    adminPword: ""
  })


  const onChange = (e) => {
     e.preventDefault()
     const {name, value} = e.target
     setProfile({
      ...profile, [name] : value
     })
  }
  const profileHandler = (e) => {
    e.preventDefault()
    console.log(profile)
    setProfile({
      fName: " ",
      lName: "",
      bName: "",
      adminPword: ""
    })
    setOpen(false)
  }
//   const profileName = profile.fName + " " + profile.lName
// console.log(profileName, profile.bName)

  const openProfile = () => {
     if(open === false){
      setOpen(true)
     } else setOpen(false)
  }


  return (
    <div className='bg-primary-200 h-36 flex'>
      <NavLink to=''><div className='text-gray-300 relative left-56 top-14 text-3xl font-bold' onClick={() => navigate('dashboard')}>Welcome</div></NavLink>
      <div className='header-profile flex relative bg-primary-500 w-96 h-28 top-4 rounded-l-ksm'>
        <div className='header-img bg-gray-400  left-10 relative'>
          <img src='' alt='' />
        </div>
        <div className=' text-white text-xl w-40 relative left-14 top-5'>Mr Ozoemena Ndubuisi Uroko</div>
        <svg onClick={openProfile} className='text-white w-10 h-10 relative left-32 font-bold top-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
      {open ?
      <div className='relative z-10 w-96 h-96 bg-white grid justify-items-center rounded-xl shadow-xl top-32 left-1/3 hover:shadow-md'>
        <h3 className='text-xl text-gray-400 relative top-2'>Update your Profile</h3>
        <form onSubmit={profileHandler}>
          <input type='text' placeholder='Enter First Name' className='header-input' name='fName' value={profile.fName} onChange={onChange}/>
          <input type='text' placeholder='Enter Last Name' className='header-input' name='lName' value={profile.lName} onChange={onChange}/>
          <input type='text' placeholder='Enter Business Name' className='header-input' name='bName' value={profile.bName} onChange={onChange}/>
          <input type='password' placeholder='Password' className='header-input' name='adminPword' value={profile.adminPword} onChange={onChange}/>
          <button type='submit' className='w-24 h-10 rounded relative left-36 top-1 text-white text-xl bg-gray-400 hover:bg-red-300 hover:text-blue-100'>Submit</button>
        </form>
      </div>
      : <div></div>
      }
    </div>
  )
}

export default Header
