"use client"
import axios from 'axios'
import {useEffect,useState} from 'react'

function UserData() {
    const [fee,setFee] = useState(0)

    useEffect(()=>{
        const getUser = async ()=>{

            const url = "/api/user"
            const userResponse = await axios.get(url)
            console.log(userResponse.data)
            setFee(userResponse.data.fee)
        }
        getUser();
    },[])
  return (
    <div>
      <h1>User Data Details</h1>
      <div>
        Student Fee = {fee}
      </div>
    </div>
  )
}

export default UserData
