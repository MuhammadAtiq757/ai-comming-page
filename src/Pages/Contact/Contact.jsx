import React from 'react';
import './contact.css'
import Swal from 'sweetalert2';
const Contact = () => {

const handleSuccess=()=>{
  Swal.fire({
    position: "top",
    icon: "success",
    width:"300px",
    title: "Send Successful",
    showConfirmButton: false,
    timer: 1500
  });

}

    return (
        <div className=' mx-auto pt-[60px] meet h-screen'>
            
    
  <div>
  <h1 className='text-center font-semibold text-2xl text-white font-serif'>CONTACT US</h1>
   <p className='border-b-2 border-black w-[30px] mx-auto mt-6'></p>
     <p className='text-center mt-10 text-white'>WE launch our new website soon. <br />
     Please stay update and follow
     </p>
  </div>

     <div className='flex justify-center items-center form mt-6'>
  <div className=''>
    <input type="text" placeholder="Name" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" /> <br />
    <input type="text" placeholder="Email" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" /> <br />
    <input type="text" placeholder="MESSAGE" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" />
    <br />
    <button onClick={handleSuccess} className='btn mt-8 ml-14 w-[180px] bg-[#0ece91] hover:bg-black flext justify-center items-center hover:text-white'>SEND MESSAGE</button>
  </div>
</div>


   


        </div>
    );
};

export default Contact;