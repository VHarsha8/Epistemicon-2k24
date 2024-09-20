import React from 'react';

function EpistemiconHomePage() {
    return (
        <div
            className="flex relative overflow-hidden my-6 flex-col items-center justify-center w-full px-6 md:gap-0 gap-4 mx-auto h-[650px] md:h-screen "
        >

            
            <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-full md:text-md backdrop-filter backdrop-blur-xl bg-green-400/30 font-poppins">
                    Welcome to
                </h1>
            </div>

            <div className="flex items-center justify-center">
                <h1 className="font-medium text-[35px] md:text-[88px] text-center font-AmericanCaptainPatrius">
                    EPISTEMICON - 2K24
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center -mt-3">
                <h1 className="text-sm text-center text-gray-500 md:text-lg font-poppins text-wrap">
                    Organized by
                </h1>
                <h1 className="text-sm text-center text-gray-500 md:text-lg font-poppins text-wrap">
                    Andhra Loyola Institute of Engineering and Technology, Vijayawada
                </h1>
            </div>

            {/* <a href="#">
                <div className="flex gap-4 p-4 mt-4 rounded-full backdrop-filter backdrop-blur-md border border-gray-900 justify-center items-center">
                    <img src="Playbutton.svg" className="w-8" alt="Play button" />
                    <div className="flex flex-col">
                        <h1 className="text-lx font-poppins font-medium">Video</h1>
                        <h1 className="text-md font-mono -mt-[6px]">2:00</h1>
                    </div>
                </div>
            </a> */}
           <a href='https://maps.app.goo.gl/J6xyoMU2tPoFzV7y7' target='_blank'><div className='md:hidden   flex flex-col justify-center mt-4 items-center pl-11 pr-8 py-2 bg-darkgreybackground'>
               <h1 className='text-md font-poppins  text-white'>28 SEPT 2024</h1>
               
               <div className='flex  justify-center items-center'>
               <h1 className='text-sm font-poppins   text-wrap text-white'>ALIET, Vijayawada</h1>
                <img src='arrowright.svg'className='w-7  -rotate-45'/>
               </div>
          </div></a> 
          {/* Mobile reference  */}
           <a href='https://maps.app.goo.gl/J6xyoMU2tPoFzV7y7' target='_blank'><div className='hidden  md:flex xs:flex  justify-center mt-4 items-center pl-11 pr-8 py-2 bg-darkgreybackground'>
               <h1 className='text-md font-poppins  text-white'>28 SEPT 2024 </h1>
               <h1 className='text-md font-poppins px-1 text-white'> |</h1>

               
               <div className='flex  justify-center items-center'>
               <h1 className='text-sm font-poppins   text-wrap text-white'> ALIET, Vijayawada</h1>
                <img src='arrowright.svg'className='w-7  -rotate-45'/>
               </div>
          </div></a> 
        </div>
    );
}

export default EpistemiconHomePage;
