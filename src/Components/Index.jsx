import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Index() {
    const [email,setEmail]=useState('')
    const[pwd,setPwd]=useState('')
    const navigate=useNavigate()
    const submit=async(e)=>{
        const body={
            userId:email,
            password:pwd
          }
          console.log(body);
          const { data } = await axios.post('https://content-client.vercel.app/loginForm',body)
          console.log(data);
          if(data.status){
            alert(data.message)
          alert('Welcome Luminar technoLab')
          alert('okk')
                //     localStorage.setItem("usertype", JSON.stringify(data.usertype))
                // localStorage.setItem("name", JSON.stringify(data.username))
                // localStorage.setItem("mail", JSON.stringify(data.email))
                // localStorage.setItem("token", JSON.stringify(data.token))
      
        //   location('/')
          }
          else{
            alert(data.message)
      
          }
       
        // navigate('/home')
    }
  return (
    <div>
        <div className='w-full flex justify-center aline-center items-center content-center p-5 h-[100vh]'>
            <div className='flex flex-col gap-5 p-5 border '>
                <input type="text" placeholder='email' className='border p-2' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder='password' className='border p-2'value={pwd} onChange={(e)=>setPwd(e.target.value)} />
                <button className='button p-2 bg-green-500 rounded border ' type='submit' onClick={submit}>Submit</button>
            </div>
         
        </div>
    </div>
  )
}

export default Index