import React from 'react';

const Contact = () => {
    return (
        <div className='container mx-auto'>
            
    <div className='mt-[60px]'>
     <h1 className='text-center font-semibold text-2xl '>CONTACT US</h1>
   <p className='border-b-2 border-black w-[30px] mx-auto mt-6'></p>
     <p className='text-center mt-10'>WE launch our new website soon. <br />
     Please stay update and follow
     </p>

     <div className='flex justify-center items-center h-screen -mt-36'>
  <div className=''>
    <input type="text" placeholder="Name" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" /> <br />
    <input type="text" placeholder="Email" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" /> <br />
    <input type="text" placeholder="MESSAGE" className="mt-4 input input-bordered border-black w-[300px] max-w-xs" />
    <br />
    <button className='btn mt-8 ml-14 w-[180px] bg-black hover:bg-black flext justify-center items-center text-white'>SEND MESSAGE</button>
  </div>
</div>


    </div>


        </div>
    );
};

export default Contact;