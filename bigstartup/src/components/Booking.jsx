import React from 'react'
import Pc1 from '../assets/18.png'
import Pc2 from '../assets/category 1.png'
import Pc3 from '../assets/17.png'
import Pc4 from '../assets/20.png'


const Booking = ({date,time,typeConsult,longSession}) => {
  return (
    <div className='mt-12 mb-12' >
     <h1 className='ml-20 text-black font-bold text-xl'>Booking Details</h1>
    <div className='flex  justify-center mt-4'>

    <div className='border flex flex-col justify-center sm:flex-row  p-8 md:justify-between rounded-lg w-11/12 text-black '>

    <div>
    <div><img src={Pc1} alt="" /></div>
    <div className='text-md font-mono font-semibold'>Booking ID</div>
    <div className='text-sm text-gray-500 -tracking-tighter'>{Math.floor(Math.random()*1000000)}</div>
    </div>

    <div>
    <div><img src={Pc2} alt="" /></div>
    <div className='text-md font-mono font-semibold'>Consultation Category</div>
    <div className='text-sm text-gray-500 -tracking-tighter'>{typeConsult}</div>
    </div>

    <div>
    <div><img src={Pc4} alt="" /></div>
    <div className='text-md font-mono font-semibold'>Session Time&Date</div>
    <div className='text-sm text-gray-500 -tracking-tighter'>{date}</div>
    <div className='text-sm text-gray-500 -tracking-tighter'>{time}</div>
    <div className='text-sm text-gray-500 -tracking-tighter'>{longSession}</div>


    </div>

    <div>
    <div><img src={Pc2} alt="" /></div>
    <div className='text-md font-mono font-semibold'>Booking Status</div>
    <div className='text-sm text-gray-500 -tracking-tighter'>Confirmed</div>
    </div>


    <div>
        <button className='border-2 border-red-500  font-mono text-md font-semibold text-red-500 bg-white rounded-full p-2 w-40 mt-6'>Join Session</button>
    </div>



    

        
    </div>

    
    </div>
    </div>
  )
}

export default Booking
