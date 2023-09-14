"use client"
import {useState} from 'react'
import HigherOrderComponent from '@/app/components/session1/HigherOrderComponent'
function RollNumber({name,num,handleNumber}) {
   
  return (
    <div className="mt-4 flex flex-col gap-4">
      <p>Roll Number of {name} is  : {num}</p>
      <p>
          <button className="border border-gray-600 px-4 py-2" onClick={handleNumber}>Increase Roll</button>
      </p>
    </div>
  )
}

export default HigherOrderComponent(RollNumber)
