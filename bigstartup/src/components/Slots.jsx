import React,{useContext, useState} from 'react'
import { FaChevronLeft , FaChevronRight } from 'react-icons/fa';
import Pic5 from '../assets/lets-icons_time-light(1).png'
import { Mycontext } from './Context';
import { Link } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';
const Slots = () => {
    const thirtyTime = ["7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM"]
    const SixtyTime = ["7:00-8:00 AM","7:00-8:00 AM","7:00-8:00 AM"]
    const[isClicked1,setIsClicked1] = useState(true);
    const [isClicked2,setIsClicked2] = useState(false);
    
    const [Arr,setArr] = useState(["Sat 15,June","Sun 16,June","Mon 17,June"]);
    const [Available,setAvailable]=useState(["08 Available","06 Available","06 Available"]);
    const [select,setSelect] = useState([]);
    const [hourSelect,setHourSelect] = useState([]);
    const [underLine,setUnderline] = useState([1,0,0]);
    const {date,setDate,time,setTime,longSession,setLongSession,typeConsult,setTypeConsult} = useContext(Mycontext);
    

    const a=[3,6,9];
    const b=[0,1,2,3,4,5,6,7,8,9];
    const selectedArr =[];
    const c=[0,1,2,3];

    const handleClick1=()=>{
        setIsClicked1(true);
        setIsClicked2(false);
        setTypeConsult("Startup Consulting")

    }
    const handleClick2=()=>{
        setIsClicked2(true);
        setIsClicked1(false);
        setTypeConsult("Career Consulting")

    }

    const ProceedToJoin =()=>{
     
        console.log(time);
        console.log(date);

        console.log(longSession);

        console.log(typeConsult);



    }

    const newArray = [0,0,0];
    console.log(underLine)

    
    
    const arr=["Sat 15,June","Sun 16,June","Mon 17,June","Tue 18,June","Wed 19,June","Thu 20,June"]
    const newArrr=["08 Available","06 Available","06 Available","06 Available","06 Available","08 Available"]
    const handleClickRight = () => {
        const lastIndex = arr.indexOf(Arr[2]);
        const lastIndex1 = newArrr.indexOf(Available[2]);


       

        
        if (lastIndex >= 0 && lastIndex < arr.length - 1) {
            const newArr = Arr.slice(1).concat(arr[lastIndex + 1]);
            setArr(newArr);
        }
        if (lastIndex1 >= 0 && lastIndex1 < arr.length - 1) {
            const newArr1 = Available.slice(1).concat(newArrr[lastIndex + 1]);
            setAvailable(newArr1);
        }
    };

    const handleClickLeft = () => {
        const firstIndex = arr.indexOf(Arr[0]);
        const firstIndex1 = newArrr.indexOf(Available[0]);


        if (firstIndex > 0) {
            const newArr = [arr[firstIndex - 1]].concat(Arr.slice(0, 2));
            setArr(newArr);
        }
        if (firstIndex1 > 0) {
            const newArr1 = [newArrr[firstIndex1 - 1]].concat(Available.slice(0, 2));
            setAvailable(newArr1);
        }
    };
  return (
    <div>
    <div>
      <Toaster/>
      <div className='font-bold text-xl ml-20 mt-12'>
        Available Slots
      </div>
      <div className='flex justify-center mt-12'>
      <div className='flex bg-gray-200 w-84 rounded-md justify-center '>
      <button  onClick={handleClick1} className={!isClicked1?'p-2 rounded-md font-mono font-medium':'bg-red-600 p-2 rounded-md font-mono  text-red-600 bg-opacity-25 '}>Startup Consulting</button>
      <button onClick={handleClick2} className={!isClicked2?'p-2 rounded-md font-mono font-medium':'bg-red-600 p-2 rounded-md font-mono  text-red-600 bg-opacity-25 '}>Career Consulting</button>

      </div>
      </div>

      <div className='flex justify-center mt-12 ' >
      <button onClick={handleClickLeft} className='bg-white border font-thin border-white rounded-full shadow-lg p-2 mr-2'><FaChevronLeft size={40} color='red'/></button>
      
      <div className=' w-3/5 p-2 bg-opacity-10 cursor-pointer'>
      <div className='flex justify-evenly   '>{
        Arr.map((item,index)=>(
            <div onClick={()=>{
                 newArray[index] =1;
                 setUnderline(newArray) ;
                 setDate(Arr[index]);
            }} className='text-xs md:text-sm font-semibold hover:translate-x-1 '>{item}</div>
        ))
      }</div>
      <div className='flex justify-evenly text-md  text-blue-800'>
      {
        Available.map((item,index)=>(
            <div className='text-xs md:text-sm '>{item}</div>
        ))
      }
        
      </div>
      <div className=' mt-4 flex justify-around'>{
        underLine.map((item,index)=>(
            <p className={item===1?"border border-b-2 border-red-500 w-12 md:w-52 flex justify-center":' border border-b-2 border-gray-300'}></p>
        ))
      }


       
      </div>
      </div>
      
      
      
      <button onClick={handleClickRight} className='bg-white border ml-2 border-white rounded-full shadow-lg p-2'><FaChevronRight size={40} color='red'/></button>
     


      </div>

      <div>
      <div className='flex space-x-2 mt-12'>
      <span className='text-gray-500 ml-6'><img src={Pic5} alt="" /></span>
      <span className='text-gray-500 mt-3'>30min</span>
      <div className='flex flex-wrap'>{
        
        thirtyTime.map((item,index)=>(
            <button onClick={()=>{
                setSelect([index]);
                setHourSelect([]);
                setLongSession("30min");
                setTime(thirtyTime[index])
            }} key={index} className={a.includes(index)?"border bg-slate-300 bg-opacity-30 text-center my-4 p-2 rounded-md text-black font-mono mx-6 w-32":select.includes(index)?"border text-center my-4 border-red-500 p-2 rounded-md bg-red-500 bg-opacity-30 text-red-500 font-mono mx-6 w-32":'border text-center my-4 border-red-500 p-2 rounded-md text-red-500 font-mono mx-6 w-32'}>{item}</button>
        ))
        
        
      }
      </div>
    

      </div>
      <div className='flex justify-center mt-4'>
        <p className='border border-b-2 w-11/12'></p>
      </div>

      <div className='flex space-x-2 mt-12'>
      <span className='text-gray-500 ml-6'><img className='w-12' src={Pic5} alt="" /></span>
      <span className='text-gray-500 mt-3 '>1hour</span>
      <div className='flex flex-wrap'>{
        
        SixtyTime.map((item,index)=>(
            <button onClick={()=>{
                setHourSelect([index]);
                setSelect([]);
                setLongSession("1hour");
                setTime(thirtyTime[index])
            }} key={index} className={a.includes(index)?"border bg-slate-300 bg-opacity-30 text-center my-4 p-2 rounded-md text-black font-mono mx-6 w-32":hourSelect.includes(index)?"border text-center my-4 border-red-500 p-2 rounded-md bg-red-500 bg-opacity-30 text-red-500 font-mono mx-6 w-32":'border text-center my-4 border-red-500 p-2 rounded-md text-red-500 font-mono mx-6 w-32'}>{item}</button>
        ))
        
        
      }
      </div>
    

      </div>

      <div className='flex justify-center mt-2'>
        <Link to='/booking' onClick={ProceedToJoin} className='text-md font-mono p-2 bg-red-500 rounded-full text-white '>Proceed Payment</Link>
      </div>

      <div className='flex justify-center mt-8 mb-12 '>
        <p className='border border-b-2 w-11/12'></p>
      </div>


      </div>


      </div>





    </div>
  )
}

export default Slots
