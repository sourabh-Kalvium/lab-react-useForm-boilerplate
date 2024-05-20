import { useState } from 'react'
import './App.css'
import {useForm} from "react-hook-form"

function App() {
   
   const {register ,handleSubmit,formState:{errors}} = useForm()

  return (
    <>

    <form onSubmit={handleSubmit((data)=>alert("submitted"))}>
      <input type='text' {...register("firstName",{required:true})} placeholder='First name'/>
      {errors.firstName && <p>First name is required</p>}
      <input type="text" {...register("lastName",{required:true})} placeholder='Last name'/>
      {errors.lastName && <p>Last name is required</p>}
      <input {...register("email",{required:true,pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})} placeholder='Email'/>
      {errors.email?(errors.email.type=="required"?<p>Email is required</p>:(errors.email.type=="pattern"?<p>provide valid email</p>:null)):null}

      <input type="password" placeholder='Password' {...register("password",{required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,10}$/})}/>
      {errors.password?(errors.password.type=="required"?<p>Password is required</p>:(errors.password.type=='pattern'?<p>Password must contain Upper case,lowercase,number,special Character and shuuld be 8 to 10 character</p>:null)):null}
      
      <input type="submit" />
      
      
    </form>
      
     
    </>
  )
}

export default App
