"use client"
import Link from 'next/link'
import {useState} from 'react'

import {FaCommentsDollar} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
function Navigation() {
    const [open,setOpen] =useState(false)
  
   const handleMenu=()=>{
    
    setOpen(!open)
    console.log("Clicked on Hamberger button",open)
   }
    return (
    <>
        <div className="relative w-full bg-gray-300 h-auto drop-shadow-sm" >
            <div className="flex flex-col md:flex-row py-2 mx-4 h-full items-center justify-between">
                <div className="my-3"><FaCommentsDollar size={40} className="text-blue-700" /></div>
                <div className="my-3">
                    <Link href="#" className="mx-2 border border-blue-700 px-8 py-2 hover:bg-blue-700 hover:text-gray-100 transition-all duration-500" >Login</Link>
                    <Link href="#" className="mx-2 bg-blue-700 text-gray-100 px-8 py-2 hover:bg-transparent hover:border hover:border-blue-700 hover:text-gray-800 transition-all duration-500">Signup</Link>
                </div>
            </div>
            <div className="md:hidden absolute top-10 mx-0" onClick={handleMenu}>
                <GiHamburgerMenu  size={40} className="md:hidden"/>
                {
                    open && (<div className="z-10 mt-12 w-[100vw] bg-gray-200 h-48 ">
                        submenu
                    </div>)
                }
                
            </div>
            <div className="hidden md:block">
                <h1>Normal Menu</h1>
            </div>
        </div> 

    </>
  )
}

export default Navigation
