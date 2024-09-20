function CseTabs(){
    return(
        <div className="flex flex-col w-full px-6 my-10 md:container md:mx-auto md:px-10 ">
            <div className="flex mb-5">
                <h1 className="px-3 py-1 text-sm text-left text-gray-500 border border-gray-400 rounded-full md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">CSE Event List</h1>
            </div>

         <div className="w-full overflow-x-auto">

    
           <table className="w-full  border-separate">
           <thead>
                <tr class=" bg-darkgreytext ">
                    <th class="border text-pearl   border-gray-400 px-4 py-2">Types of Events</th>                 
                    <th class="border text-pearl   border-gray-400 px-4 py-2">Topics and Rules</th>
                    <th class="border text-pearl  border-gray-400 px-4 py-2">Prizes / Gifts</th>
                    <th class="border text-pearl border-gray-400 px-4 py-2">Winners</th>
                    <th class="border text-pearl border-gray-400 px-4 py-2">Cordinators</th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white">
                    <td className="px-6 text-xl border border-gray-200 font-poppins">1. Poster Presentation</td>
                    <td className="px-6 py-2 border border-gray-200 font-poppins"> <li  className="my-2  " > Team size: Maximum of 4 members are allowed.</li>  <li  className="mb-2">  Max. Posters : Only one poster will be allowed to present per team.</li> <li  className="mb-2"> Letters & Diagrams : All lettering and diagrams should be large enough to be read from a minimum of 2 feet.</li> <li  className="mb-2"> Language : The official language for the poster will be English.</li> <li  className="mb-2"> Poster Size: maximum 36”x48” (Printed or A2-Hand Made).</li> <li  className="mb-2"> Evaluation of marks : Evaluation of marks  will be based on theme, creativity, efforts taken, scientific content and presentation.</li><li  className="my-2">  Judgement : Decision of the judges/committee will be final.</li>
                    </td>
                    <td className="px-6 py-2 border font-poppins ">5000/- Prize money</td>
                    <td className="px-6 py-2 text-center border font-poppins">-</td>
                    <td className="px-6 py-2 border font-poppins ">O.Bharath Kiran <br /> Y.Satish Reddy <br /> S. Sai Kumar</td>
                 
                </tr>
                <tr className="bg-white">
                         <td className="px-6 text-xl border font-poppins">2. Paper Presentation</td>
                         <td className="px-6 py-2 border font-poppins"> <li className="my-2">Soft copy of paper with complete details of student (Name, Reg.No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (cse.epi24@aliet.ac.in)</li> <li className="mb-2">Maximum of two authors per paper. </li>  <li className="mb-2">Presentation time should be (8Min) and Queries (2Min) in total 10Min.</li> <li className="my-2">Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).</li></td>
                         <td className="px-6 py-2 border font-poppins ">7000/- Prize money</td>
                         <td className="px-6 py-2 text-center border font-poppins">-</td>
                         <td className="px-6 py-2 border font-poppins ">V.Harsha vardhan <br /> P.Yagnesh <br /> P.Siddardh</td>
                </tr>
                <tr className="bg-white">
                         <td className="px-6 text-xl border font-poppins">3. Model Expo</td>
                         <td className="px-6 py-2 border font-poppins"><li> Team size: Maximum of 4 members are allowed.</li>  <li> Student ID: Student ID Card issued by College is compulsory.</li>  <li> Presentation: Should be in Power Point Presentation (ppt) only.</li> <li> Project display: Free-standing and made of durable materials.</li> <li> Project safety: Prohibit experiments that could injure people or animals, or that require adult  consent.</li><li> Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).</li><li> Judgement : Judges decision will be final.</li></td>
                         <td className="px-6 py-2 border font-poppins ">7000/- Prize money</td>
                         <td className="px-6 py-2 text-center border font-poppins">-</td>
                         <td className="px-6 py-2 border font-poppins ">V.Harsha vardhan <br /> P.Harshitha </td>
                </tr>
                <tr className="bg-white">
                         <td className="px-6 text-xl border font-poppins">4. Spot Talks</td>
                         <td className="px-6 py-2 border font-poppins"><li> Art and Design</li> <li>Cultural Heritage Preservation</li> <li>Cultural Exchange through Virtual Reality</li> <li>Fashion and Cultural Identity </li></td>
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