import React, { useContext } from 'react'
import Header from './Header'
import Booking from './Booking';
import Navbar from "./Navbar";
import Profile from './Profile';
import { Mycontext } from './Context';
const BookingPage = () => {
    const {date,time,typeConsult,longSession} = useContext(Mycontext);
  return (
    <div>
    <Navbar />
    <Header/>
    <Profile/>
    <Booking date={date} time={time} typeConsult={typeConsult} longSession={longSession} />
   </div>
  )
}

export default BookingPage
