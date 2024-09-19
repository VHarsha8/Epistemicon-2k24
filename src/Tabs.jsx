function Tabs(){
    return(
        <div className="flex flex-wrap w-full h-auto gap-4 px-6 md:px-0 md:items-center md:justify-center md:gap-10 ">

            <div className="flex items-center justify-center mb-1">
                <a href="#" className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">CSE</a>
            </div>
            <div className="flex items-center justify-center mb-1">
                <a href="#" className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">MECH</a>
            </div>
            <div className="flex items-center justify-center mb-1">
                <a href="#" className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">ECE</a>
            </div>
            <div className="flex items-center justify-center mb-1">
                <a href="#" className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">EEE</a>
            </div>
            <div className="flex items-center justify-center mb-1">
                <a href="#" className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">CIVIL</a>
            </div>
            <div className="flex items-center justify-center mb-1">
                <a href="#" className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">AIML</a>
            </div>

        </div>
    );
}

export default Tabs;