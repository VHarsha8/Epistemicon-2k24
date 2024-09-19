function CseTabs(){
    return(
        <div className="flex flex-col w-full px-6 my-10 md:container md:mx-auto md:px-10 ">
            <div className="flex mb-5">
                <h1 className="px-3 py-1 text-sm text-left text-gray-500 border border-gray-400 rounded-full md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">CSE Event List</h1>
            </div>

         <div className="w-full overflow-x-auto">

    
           <table className="w-full border-collapse table-auto">
           <thead>
                <tr class="bg-gray-200">
                    <th class="border border-gray-300 px-4 py-2">Types of Events</th>                 
                    <th class="border border-gray-300 px-4 py-2">Topics and Rules</th>
                    <th class="border border-gray-300 px-4 py-2">Prizes / Gifts</th>
                    <th class="border border-gray-300 px-4 py-2">Winners</th>
                    <th class="border border-gray-300 px-4 py-2">Cordinators</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="px-6 text-xl border font-poppins">1. Poster Presentation</td>
                    <td className="px-6 py-2 border font-poppins">Artificial Intelligence <br /> Machine Learning <br /> Block Chain <br /> Cybersecurity <br /> Generative AI
                    </td>
                    <td className="px-6 py-2 border font-poppins ">5000/- Prize money</td>
                    <td className="px-6 py-2 text-center border font-poppins">-</td>
                    <td className="px-6 py-2 border font-poppins ">O.Bharath Kiran <br /> Y.Satish Reddy <br /> S. Sai Kumar</td>
                 
                </tr>
                <tr>
                         <td className="px-6 text-xl border font-poppins">2. Paper Presentation</td>
                         <td className="px-6 py-2 border font-poppins">Internet of Things <br /> Renewable Energy <br />Sustainable Development <br />Healthcare Policy and Management <br />Financial Markets and Investment</td>
                         <td className="px-6 py-2 border font-poppins ">7000/- Prize money</td>
                         <td className="px-6 py-2 text-center border font-poppins">-</td>
                         <td className="px-6 py-2 border font-poppins ">V.Harsha vardhan <br /> P.Yagnesh <br /> P.Siddardh</td>
                </tr>
                <tr>
                         <td className="px-6 text-xl border font-poppins">3. Model Expo</td>
                         <td className="px-6 py-2 border font-poppins">Engineering and Robotics <br /> Aerospace and Aviation <br />Architecture and Urban Planning <br />Automotive Engineering <br />Financial Markets and Investment</td>
                         <td className="px-6 py-2 border font-poppins ">7000/- Prize money</td>
                         <td className="px-6 py-2 text-center border font-poppins">-</td>
                         <td className="px-6 py-2 border font-poppins ">V.Harsha vardhan <br /> P.Harshitha </td>
                </tr>
                <tr>
                         <td className="px-6 text-xl border font-poppins">4. Spot Talks</td>
                         <td className="px-6 py-2 border font-poppins">Art and Design <br />Cultural Heritage Preservation <br />Cultural Exchange through Virtual Reality <br />Fashion and Cultural Identity </td>
                         <td className="px-6 py-2 border font-poppins ">7000/- Prize money</td>
                         <td className="px-6 py-2 text-center border font-poppins">-</td>
                         <td className="px-6 py-2 border font-poppins ">V.Harsha vardhan <br /> P.Harshitha </td>
                </tr>
            </tbody>
           </table>    </div>
        </div>
    );
}

export default CseTabs;