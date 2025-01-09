import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { Link } from 'react-router-dom';


const About = () => {

    // ---------- Custom Variables

    const [alldata, setallData] = useState([])


    // ----------- Firebase Variavles ---------------- 
    const db = getDatabase();


    // ---------- Functions 


    useEffect(()=>{

        onValue(ref(db, 'forms/'), (snapshot) => {

         let arr = []

         snapshot.forEach((item)=>{

            arr.push(item.val())
         })

         setallData(arr)

        });
        
    },[])



  return (
   <>
   <div className="about bg-purple-200 w-full h-screen">

   


    <div className="list m-auto w-[1500px] h-screen p-[40px] bg-white/40">

    <div className="back_btn flex justify-end">
        <button className='bg-yellow-100 hover:bg-green-300 font-semibold p-4'><Link to={'/'}>Go to Home ➡️</Link></button>
    </div>

    <h2 className='title mt-[50px] mb-[100px] font-bold text-[30px] text-green-800 text-center'>All Submitted Information is here</h2>

    
    {

        alldata.map((item)=>(

   <div className="all_data_functional">
   <h1 className='mt-[50px] font-bold text-[20px] text-black '>Name :    {item.CusName}</h1>
   <h1 className='mt-[8px] font-bold text-[20px] text-black '> Email :    {item.CusEmail}</h1>
   </div>


        ))
    }


    </div>



   </div>
   </>
  )
}

export default About