"use client"
import {useState, useEffect} from 'react'
import axios from 'axios'
function UsersComponent() {
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        const getUserData = async()=>{
            const users = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // console.log(users.data)
            setUserData(users.data)
        }
        getUserData();
    },[])
  return (
    <div>
      Users Detail
      <hr/>
      <table border="1" cellpadding={10}>

      
    {
        userData.map(user=>{
            return(
                <tr>
                    <td>
                        {user.id}
                    </td>
                    <td>
                        {user.title}
                    </td>
                    <td>
                        {user.body}
                    </td>
                
                </tr>
            )
           
        })
    }
    </table>
    </div>
  )
}

export default UsersComponent
