import React from 'react'
import ProfilePic from '../assets/Ellipse 60.png'
import Pic1 from '../assets/grommet-icons_user-expert.png'
import Pic4 from '../assets/arcticons_priceconverter.png'
import Booking from './Booking'

const Profile = () => {
  return (
   
    <div className='flex justify-center'>

    <div className='border w-11/12 shadow-md shadow-orange-600 rounded-md mt-12'>
    <div className='m-6 flex flex-col md:flex-row  '>
    <div className='flex'>
    <div id='photo' className=' md:"" '>
    <img className='  md:w-40 ' src={ProfilePic} alt="" /> 

    </div>
    <div id='skills' className='ml-8 '>
    <h1 className='font-semibold text-xl md:text-2xl '>Ridhima Sen</h1>
    <p className='text-sm md:text-md text-gray-600'>Consulting Leader</p>
    <div className='flex space-x-4 mt-1'>
    <p className=''><img className='w-4 mt-1.5' src={Pic1} alt="" /></p>
    <p className='text-sm mt-1 text-gray-600' > Qualified in startup Consulting</p>

    </div>
    <div className='flex space-x-4 mt-1'>
    <p className=''><img className='w-4 mt-1.5' src={Pic1} alt="" /></p>
    <p className='text-sm mt-1 text-gray-600' >20 years of experience in consulting</p>

    </div>
    <div className='flex space-x-4 mt-1'>
    <p className=''><img className='w-4 mt-1.5' src={Pic1} alt="" /></p>
    <p className='text-sm mt-1 text-gray-600' > Consultation fee {'\u20B9'}1000</p>

    </div>
</div>
    

    </div>
    <div id='line ' className='mt-8 md:ml-40 '>
    <p className='border border-b-2  md:border-l-2 md:h-40'></p>

    </div>

    <div className='prices md:ml-12 text-center md:text-start '>
    <h1 className='font-semibold text-2xl   md:text-2xl'>Consultation Prices</h1>
    <div className='flex space-x-10 mt-4'>
        <div>
        <div className='flex '>
        <p><img src={Pic4} alt="" /></p>
        <p className='text-sm text-gray-600'>30 minutes session</p>
        </div>
           <p className='ml-6 text-sm font-semibold'>{'\u20B9'}1000</p>
        </div>
        <div>
        <div className='flex'>
        <p><img src={Pic4} alt="" /></p>
        <p className='text-sm text-gray-600'>1 hr session</p>
        </div>
           <p className='ml-6 text-sm font-semibold'>{'\u20B9'}1500</p>
        </div>
        <div>
        <div className='flex'>
        <p><img src={Pic4} alt="" /></p>
        <p className='text-sm text-gray-600'>Availability</p>
        </div>
           <p className='ml-6 text-sm font-semibold'>Mon-Sat</p>
        </div>
    </div>
    <div className='flex justify-center mt-8'>
        <button className='bg-red-600 p-2 w-40 rounded-full font-mono text-md text-center text-white'>Book Now</button>
    </div>
    <div>

    </div>

    </div>


    </div>
    <div className='text-black font-semibold text-2xl md:text-xl md:ml-20 text-center md:text-start'>
        Skills
    </div>
    <div className='flex flex-wrap justify-evenly mb-12 mt-4'>
        <div className='bg-red-600 bg-opacity-20 mt-2 text-red-600  p-2 rounded-full text-sm md:text-md text-center'>Marketing Consulting</div>
        <div className='bg-red-600 bg-opacity-20 mt-2 text-red-600 rounded-full p-2 text-sm md:text-md text-center'>Accounts Consulting</div>
        <div className='bg-red-600 bg-opacity-20 mt-2 text-red-600 rounded-full p-2 text-sm md:text-md text-center'>Business Consulting</div>
        <div className='bg-red-600 bg-opacity-20 mt-2 text-red-600 rounded-full p-2 text-sm md:text-md text-center'>Business Consulting</div>
        <div className='bg-red-600 bg-opacity-20 mt-2 text-red-600 rounded-full p-2 text-sm md:text-md text-center'>Business Consulting</div>
    </div>


    </div>
      

    
   </div>
  )
}

export default Profile
