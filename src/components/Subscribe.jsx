import React from 'react'

export default function Subscribe() {
  return (
    <div className='bg-gray-100 my-10 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-52'>
        <h1 className='text-xl font-bold tracking-wider flex-grow'>Subscribe to our monthly newsletter</h1>
        <div className="bg-white p-2 rounded-full flex items-center justify-center md:justify-between">
            <input type="text" placeholder="Your email address..." className='px-2' />
            <button className='bg-blue-500 py-2 rounded-full px-4 text-white font-semibold'>SUBSCRIBE</button>
        </div>
    </div>
  )
}
