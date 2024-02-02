import React from 'react';
import intro from '../assets/videos/intro1.mp4'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Counting from './Counting';
import Swal from 'sweetalert2';

const CommingSoon = () => {

const handleAlert = () =>{

  Swal.fire({
    position: "top",
    icon: "success",
    width:"300px",
    title: "Notify Successful",
    showConfirmButton: false,
    timer: 1500
  });

}
const gradientStyle = {
  background: 'linear-gradient(to bottom, #2c3033bf, #2c3033bf)', 
};


    return (
        <div className='tour text-center  relative '  >



  <video className='absolute top-0 left-0 w-full h-full object-cover' autoPlay loop muted>
    <source src={intro} type='video/mp4' />
    Your browser does not support the video tag.
  </video>

  <div className='mx-auto container relative h-[800px]' style={gradientStyle}>
 <div className='flex justify-between px-4'>
<h2 className='text-3xl font-serif pt-4 font-bold text-white'>Code <span className='text-[#0ece91]'>Hub</span></h2>
 </div>

   <div className='pt-[80px] px-4 ' >

<Counting></Counting>


<div>
{/* <h1 className='text-4xl font-bold text-white mb-6'>365 <sup className='text-sm'>DAYS</sup> </h1> */}
</div>
{/* <div className='flex mx-auto border-x-4 border-green-600 w-[300px]  text-white justify-center items-center gap-8 text-4xl mb-8'>


<div>00
<br /> 
<p className='text-sm'>hrs</p>
</div>
<div>00
<br /> 
<p className='text-sm'>Min</p>
</div>
<div>00
<br /> 
<p className='text-sm'>Sec</p>
</div>
</div> */}


   <p className='text-1xl font-semibold font-serif text-white mt-16'> WE ARE <br />
   <p className='text-2xl font-bold mt-1 font-serif'>COMMING SOON</p>
   </p>

   <div className="join mt-6 px-4 mr-4">
  <input className="input input-bordered bg-inherit text-white border-white join-item" placeholder="Enter Your Email"/>
  <button onClick={handleAlert} className="btn join-item">Get Notify</button>
</div>

<div className='mt-6 flex justify-center gap-8'>
  <button className='btn  bg-[#0ece91] hover:text-white w-32 hover:bg-inherit'><Link to='/contact'>Contact Us</Link></button>
  <button className='btn w-32  hover:bg-inherit hover:text-white'> <Link to='/about'>About Us</Link></button>
</div>

<div className='flex justify-end mt-20 text-white text-2xl gap-4'>
<FaFacebook className='hover:text-[#0ece91]' />  
<FaInstagramSquare className='hover:text-[#0ece91]' /> 
<FaWhatsappSquare className='hover:text-[#0ece91]' /> 
<FaTwitter className='hover:text-[#0ece91]' />
<FaSkype className='hover:text-[#0ece91]' />
</div>

   </div>
  </div>
</div>

    );
};

export default CommingSoon;