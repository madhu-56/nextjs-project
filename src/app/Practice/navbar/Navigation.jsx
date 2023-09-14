"use client"
import link from 'next/link'
import {uaeState} from 'react'
import {BiNavigation} from'react-icons/Bi'

function Navigation() {
  return (
    <>
      <div className="relative w-full bg-gray-300 h-auto drop-shadow-sm">
        <div className="flex flex-col md:flex-row py-2 mx-4 h-full items-center justify-between">
        <div className="my-3"><BiNavigation size={40} className="text-blue-700" /></div>
            <div className="my-3">
            <link href="#" className="mx-2 border border-blue-700 px-8 py-2 hover:bg-blue-700 hover:text-gray-100 transition-all duration-500" >Login</link>
            <link href="#" className="mx-2 border border-blue-700 px-8 py-2 hover:bg-blue-700 hover:text-gray-100 transition-all duration-500" >User</link>
            </div>
        </div>

      </div>
    </>
  )
}

export default Navigation
