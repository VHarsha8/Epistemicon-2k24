function Footer(){
    return(
        <div className="bg-darkgreybackground h-auto w-full py-10  md:p-10 flex flex-col  ">

            <div className="container mx-auto flex flex-col px-6 md:px-16">
                <img src="alietlogo.png" className="w-20"/>
            <h1 className="font-Vogue text-white text-3xl text-left md:text-4xl font-medium py-6 md:py-10">Epistemicon - 2K24</h1>
            <div className="flex md:flex-row flex-col justify-between ">
                <div className="flex  gap-4  md:gap-10">
                    <div className="flex  md:w-auto md:h-auto w-1/2 flex-col  ">
                    <h1 className="font-poppins font-medium text-base md:text-md text-white"> About</h1>
                    <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> Forum</h1>
                    <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> About ALIET</h1>

                    </div>
                    <div className="flex md:w-auto md:h-auto w-1/2 flex-col ">
                    <h1 className="font-poppins font-medium text-base md:text-md text-white"> Contact</h1>
                    <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> Policy</h1>
                    <h1 className="font-poppins  text-gray-400 text-sm md:text-md"> Enquiry</h1>

                    </div>
                </div>
                <div className="flex py-6">
                <h1 className="font-poppins md:flex hidden md:text-md text-sm  text-left md:text-right text-white"> GM55+CCQ, ITI Rd, <br /> Beside Ramesh Hospital,   Jayaprakash Nagar, <br /> Vijayawada,  Andhra Pradesh 520008.</h1>
                <h1 className="font-poppins md:text-md text-sm flex md:hidden  text-left md:text-right text-white"> GM55+CCQ, ITI Rd, <br /> Beside Ramesh Hospital,   Jayaprakash Nagar,   Vijayawada,  Andhra Pradesh 520008.</h1>
                </div>
            </div>
            <div className=" flex md:justify-end md:items-end justify-start items-start">
            <h1 className="font-poppins text-white md:text-left text-right font-medium ">Made by CSE Department</h1>

            </div>
            </div>
            

            

        </div>
    );
}
export default Footer;