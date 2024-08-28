import React from 'react'

function Index() {
  return (
    <div>
        <div className='w-full flex justify-center aline-center items-center content-center p-5 h-[100vh]'>
            <div className='flex flex-col gap-5 p-5 border '>
                <input type="text" placeholder='email' className='border p-2'/>
                <input type="password" placeholder='password' className='border p-2' />
                <button className='button p-2 bg-green-500 rounded border ' >Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Index