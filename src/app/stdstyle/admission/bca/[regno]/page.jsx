"use client"

import {useState} from 'react'
function StudentRegistrationDetails({params}) {
    // const {regno} = params;
    const reg = params.regno
    const [mycolor, setMycolor] = useState(true)
    const handleColorEffect=()=>{
            setMycolor(!mycolor)
    }
  return (
    <div>
      <p className={`${mycolor ? "text-green-700" : "text-red-800 font-bold"}`}>This is your Registration Number :</p> 
      {/* {
        reg>1000 ?(
            <p className="text-green-700">Your Registration number is {reg}</p>
        ) : (
            <p className="text-red-600">Your Registration number is {reg}</p>
        )
      } */}
      
      {
        <p className={`${reg>1000?"text-green-600":"text-red-700"} bg-orange-600 px-4 py-3`}>Your Registration number is {reg}</p>
      }
    
    <p>
        <button onClick={handleColorEffect} className="mt-5 px-4 py-2 bg-blue-700 text-gray-200">Change Effect</button>
    </p>
    </div>
  )
}

export default StudentRegistrationDetails
