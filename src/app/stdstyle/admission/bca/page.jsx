"use client"
import Link from 'next/link';
import {useState} from 'react'

function BCA() {
    const [reg, setReg] = useState(0);
  return (
    <div>
      Hello BCA Student
      <div>
        <form>

        <label>Enter Registration Number</label>
         <input type="text" onChange={e=> setReg(e.target.value)}  className="appearance-none outline-none border border-green-200 px-2 py-2"/>
         <Link href={`/stdstyle/admission/bca/${reg}`}>Get Student</Link>
        </form>
      </div>
    </div>
  )
}

export default BCA
