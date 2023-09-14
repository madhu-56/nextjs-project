import {useContext} from 'react'
import { FeeContext, BranchContext } from './CompA'


function CompD() {
    const fee = useContext(FeeContext)
    const branch = useContext(BranchContext)
  return (
    <div>
      Component D
      <p>
        Fee = {fee} and Branch = {branch}
      </p>
    </div>
  )
}

export default CompD
