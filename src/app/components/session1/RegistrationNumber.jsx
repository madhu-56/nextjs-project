"use client"
import {useState} from 'react'
import HigherOrderComponent from '@/app/components/session1/HigherOrderComponent'

function RegistrationNumber({name, num, handleNumber}) {
    
  return (
    <div className="mt-4 flex flex-col gap-4">
      <p>Registration Number of {name} is : {num}</p>
      <p>
          <button className="border border-gray-600 px-4 py-2" onClick={handleNumber}>Increase Registration NUmber</button>
      </p>
    </div>
  )
}

export default  HigherOrderComponent(RegistrationNumber)
