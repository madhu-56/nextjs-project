"use client"
import {useState,useEffect} from 'react'

type prop = {
    name:string,
    roll:number
}
function Information() {
    const [num,setNum] = useState(0)
  return (
    <>
    <div className="min-h-screen w-full bg-orange-300 flex justify-center items-center">
    <h2 className="text-4xl font-bold">This is my page information</h2>
    </div>
      
    </>
  )
}

export default Information
