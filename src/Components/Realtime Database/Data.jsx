import React, { useState } from 'react'
import './Data.css'
import { getDatabase, push, ref, set } from "firebase/database";
import { Link } from 'react-router-dom';


const Data = () => {

    // --------- Customes Variables 

const [formdata, SetFormData] = useState({Name:'', Email:''})



    // -------------- Firebase Variables 

    const db = getDatabase();

    // -----------Function -------

    const HandelSubmit =()=>{

        set(push(ref(db, 'forms/')), {

            CusName:formdata.Name,
            CusEmail:formdata.Email
            
          })

          SetFormData((prev)=>({...prev,  Name:'' , Email:''}))
        
    }

    console.log(formdata)

  return (
   <>

<div className="min-h-screen flex items-center justify-center bg-green-100">

    <div className="form bg-black/60 h-[400px] w-[400px] rounded-lg">

    <h1>Submit Your Data</h1>

    <div className="inputs mt-[30px]">

    <input onChange={(e)=>SetFormData((prev)=>({...prev, Name:e.target.value}))}  value={formdata.Name} className='input1 w-full h-[40px] rounded-md  px-[20px]' type="text" placeholder='Your name' />

    <input onChange={(e)=>SetFormData((prev)=>({...prev, Email:e.target.value}))}  value={formdata.Email} className='input1 w-full h-[40px] rounded-md px-[20px] mt-[30px]' type="text" placeholder='@Email' />



   <div className="btn flex justify-center mt-[25px]">
   <button onClick={HandelSubmit} className='button px-[14px] py-[6px] font-bold text-gray-700 text-[18px] rounded-sm hover:bg-white transition-all duration-200 bg-green-200  hover:scale-[1.1]'><Link to={'/about'}>Submit</Link></button>

   </div>

    </div>


    </div>
     
     
 </div>
   
   </>
  )
}

export default Data