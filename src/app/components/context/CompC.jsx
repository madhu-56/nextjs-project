//import React from 'react'
import {FeeContext, BranchContext} from '@/app/components/context/CompA'
import CompD from '@/app/components/context/CompD'
function CompC() {
  return (
    <div>
      Component - C
      <div>
        <FeeContext.Consumer>
        {
            (fee)=>{
                //return <p>Fee is {fee} </p>
                return(
                    <BranchContext.Consumer>
                    {
                        (branch)=>{
                            return <p>Fee is {fee}  and Branch Name is {branch}</p>
                        }
                    }
                    </BranchContext.Consumer>
                )
            }
        }  
        </FeeContext.Consumer>
      </div>
      <h2>
        Data from component D 
        <CompD />
      </h2>
    </div>
  )
}

export default CompC
