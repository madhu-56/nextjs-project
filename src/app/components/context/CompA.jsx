"use client"
import React from 'react'
import CompB from './CompB'

export const FeeContext = React.createContext()
export const BranchContext = React.createContext()
function CompA() {
  return (
    <div>
      Component - A
      <FeeContext.Provider value={2330} >
        <BranchContext.Provider value='BCA'>
            <CompB />
        </BranchContext.Provider>
      </FeeContext.Provider>
    </div>
  )
}

export default CompA
