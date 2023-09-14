import React from 'react'

function HeroComponent() {
  return (
    <div className="w-full h-[50vh] min-h-[50vh] bg-gradient-to-br from-orange-300 to-orange-700">
      <div className=" h-full container max-w-5xl  mx-auto relative" >
        <div className="text-center bg-clip-text text-transparent  text-4xl pt-4 bg-gradient-to-r from-blue-400 to-green-900 font-bold">
        Hero component
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50">
        
        </div>
        <div className="absolute top-28 left-10 text-white">
            hero content
        </div>
      </div>
     
    </div>
  )
}

export default HeroComponent
