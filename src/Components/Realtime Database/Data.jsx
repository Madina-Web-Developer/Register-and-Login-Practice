import React from 'react'
import './Data.css'

const Data = () => {


  return (
   <>

<div className="min-h-screen flex items-center justify-center bg-green-100">

    <div className="form bg-black/60 h-[400px] w-[400px] rounded-lg">

    <h1>Submit Your Data</h1>

    <div className="inputs mt-[30px]">

    <input className='input1 w-full h-[40px] rounded-md  px-[20px]' type="text" placeholder='Your name' />

    <input className='input1 w-full h-[40px] rounded-md px-[20px] mt-[30px]' type="text" placeholder='@Email' />

   <div className="btn flex justify-center mt-[25px]">
   <button className='button px-[14px] py-[6px] font-bold text-gray-700 text-[18px] rounded-sm hover:bg-white transition-all duration-200 bg-green-200'>Submit</button>

   </div>

    </div>


    </div>
     
     
 </div>
   
   </>
  )
}

export default Data