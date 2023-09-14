"use client"
import {useForm} from 'react-hook-form'

function StudentAdmission() {
  const 
     {
      register, 
      handleSubmit, 
      formState:{errors}
     }= useForm();
  
     const onSubmit=(data)=>{
      console.log(data)
     }
  return (

    <>
    <div className="max-w-4xl mx-auto border border-red-200 mt-10">

     <h1>Student Admission Form</h1> 
     <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-4">
          <label>User Name</label>
          <input 
            {...register("userName",{required:true, maxLength:10, minLength:5})} 
            type="text" 
            className="appearance-none border border-green-200 px-4 rounded-lg outline-none py-1" 
          />
          {
            errors.userName && errors.userName.type=='required' && <div className="text-red-500"> Name Required </div>
          }
          {
            errors.userName && errors.userName.type=='maxLength' && <div className="text-red-500"> Name should be less than 10 characters </div>
          }
          {
            errors.userName && errors.userName.type=='minLength' && <div className="text-red-500"> Name should have at least 5 characters </div>
          }
        </div>
        <div className="flex flex-col mb-4">
          <label>Email ID</label>
          <input {...register("email")} type="email"  className="appearance-none border border-green-200 px-4 rounded-lg outline-none py-1"/>
        </div>
        <div className="flex flex-col mb-4">
          <label>Password</label>
          <input {...register("pwd")}  type="password"  className="appearance-none border border-green-200 px-4 rounded-lg outline-none py-1"/>
        </div>
        <div>
          <input type="submit" value="Register" className="bg-blue-700 text-gray-200 px-10 py-2 mt-10 hover:bg-cyan-500 transition-all duration-500"/>
        </div>
      </form>
     </div>
    </div>
    </>
  )
}

export default StudentAdmission
