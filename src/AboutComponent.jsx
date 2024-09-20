function AboutComponent(){
    return(
        <div className=" h-auto py-20 flex container mx-auto px-32 flex-col gap-6">
                    <h1 className="text-4xl font-goodtimes font-medium">About Epistemicon</h1>
                    <p className="text-md font-poppins text-gray-500 mt-4 text-wrap">Epistemicon is an annual inter-college event, organized with passion and dedication by the student community. It's not just an event, it's a seasonal celebration held every year in our college, showcasing talent, innovation, and the spirit of competition. Whether you are a performer, a creator, or someone eager to showcase your skills, Epistemicon invites you to be part of this dynamic experience</p>
                    <img src="Epistemicon1.jpg " className="w-full h-screen"/>
                    <div className="flex items-center justify-center mb-1">
                <h1 className="px-3 py-1 text-sm text-center text-gray-500 border border-gray-400 rounded-md md:text-md backdrop-filter backdrop-blur-xl bg-green-400/30 font-poppins">
                    Photographs from 2023 Epistemicon
                </h1>
            </div>
        </div>
    );
}

export default AboutComponent;