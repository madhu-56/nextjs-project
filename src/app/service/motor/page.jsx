"use client"
import Link from "next/link"
import {useState} from 'react'

function MotorPage() {
  const [model, setModel] = useState('POINTER')
  
  return (

    <div>
      Motor Service
      <a href="/service/motor/89000">Get Model Details</a>
      <div>
      <Link href={`/service/motor/${model}`}>Go to Model Details</Link>
      </div>
    
    </div>
  )
}

export default MotorPage
