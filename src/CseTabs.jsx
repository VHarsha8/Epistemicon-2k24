import React, { useEffect, useState } from 'react';

function CseTabs({ selectedDepartment }) {
    // Sample event data for all departments
    const eventData = {
        CSE: [
            {
              eventName: "Poster Presentation",
              topics: "Artificial Intelligence, Machine Learning, Block Chain, Cybersecurity, Generative AI",
              prize: "5000/- Prize money",
              winners: "-",
              coordinators: "O.Bharath Kiran, Y.Satish Reddy, S. Sai Kumar"
            },
            {
              eventName: "Paper Presentation",
              topics: "1. Soft copy of paper with complete details of students (Name, Reg No, Branch, College Name, Location, Mail-id, Phone number) and PPT should be sent to (cse.epi24@aliet.ac.in) 2. Maximum of two authors per paper. 3. Presentation time should be (8 Min) and Queries (2 Min) in total 10 Min. 4. Full Length paper should be submitted in word file not more than 10 pages. (Abstract should be specified clearly).",
              
              prize: "7000/- Prize money",
              winners: "-",
              coordinators: "V.Harsha vardhan, P.Yagnesh, P.Siddardh"
            },
            {
              eventName: "Coding Competition",
              topics: "Data Structures, Algorithms, Competitive Programming",
              prize: "8000/- Prize money",
              winners: "-",
              coordinators: "Dr. B AshaLatha , Mrs P.Nancy Anurag, Mrs K. Neeharika, Mr.N. Vijay Kumar, Mrs N.V.L Manaswini"
            },
            {
              eventName: "Hackathon",
              topics: "Web Development, Mobile App Development, Cybersecurity",
              prize: "10000/- Prize money",
              winners: "-",
              coordinators: "P.Vikram, R.Mahesh"
            },
            {
              eventName: "Tech Quiz",
              topics: "Programming Languages, Networking, Operating Systems",
              prize: "3000/- Prize money",
              winners: "-",
              coordinators: "S.Ravi Kumar, K.Jyothi"
            }
          ],
          ECE: [
            {
              eventName: "Poster Presentation",
              topics: "Digital Signal Processing, Embedded Systems, Communication Engineering",
              prize: "5000/- Prize money",
              winners: "-",
              coordinators: "A.Kumar, B.Singh"
            },
            {
              eventName: "Paper Presentation",
              topics: "Wireless Communication, VLSI Design, Internet of Things",
              prize: "7000/- Prize money",
              winners: "-",
              coordinators: "C.Joshi, D.Mehta"
            },
            {
              eventName: "Robotics Expo",
              topics: "Autonomous Systems, Robotics Design, Mechatronics",
              prize: "9000/- Prize money",
              winners: "-",
              coordinators: "E.Rahul, F.George"
            },
            {
              eventName: "Circuit Design Challenge",
              topics: "Analog Circuits, Digital Logic Design, VLSI",
              prize: "12000/- Prize money",
              winners: "-",
              coordinators: "G.Priya, H.Kumar"
            },
            {
              eventName: "Tech Quiz",
              topics: "Electronics, Signal Processing, Communication Networks",
              prize: "3000/- Prize money",
              winners: "-",
              coordinators: "I.Venkat, J.Mahesh"
            }
          ],
          EEE: [
            {
              eventName: "Poster Presentation",
              topics: "Power Systems, Electric Machines, Renewable Energy",
              prize: "5000/- Prize money",
              winners: "-",
              coordinators: "K.Nikhil, L.Akash"
            },
            {
              eventName: "Paper Presentation",
              topics: "Smart Grids, Electric Vehicles, Energy Efficiency",
              prize: "7000/- Prize money",
              winners: "-",
              coordinators: "M.Sravan, N.Hemanth"
            },
            {
              eventName: "Project Expo",
              topics: "Solar Power, Wind Energy, Smart Homes",
              prize: "10000/- Prize money",
              winners: "-",
              coordinators: "O.Shiva, P.Anusha"
            },
            {
              eventName: "Circuit Design",
              topics: "Power Electronics, Control Systems, Transformers",
              prize: "9000/- Prize money",
              winners: "-",
              coordinators: "Q.Krishna, R.Preeti"
            },
            {
              eventName: "Tech Quiz",
              topics: "Power Systems, Electronics, Electric Drives",
              prize: "3000/- Prize money",
              winners: "-",
              coordinators: "S.Kalyan, T.Suresh"
            }
          ],
          MECH: [
            {
              eventName: "Poster Presentation",
              topics: "Automobile Engineering, Thermodynamics, Fluid Mechanics",
              prize: "5000/- Prize money",
              winners: "-",
              coordinators: "U.Rajesh, V.Dheeraj"
            },
            {
              eventName: "Paper Presentation",
              topics: "Manufacturing Processes, CAD/CAM, Robotics",
              prize: "7000/- Prize money",
              winners: "-",
              coordinators: "W.Siva, X.Vamsi"
            },
            {
              eventName: "Model Expo",
              topics: "3D Printing, CNC Machines, Advanced Materials",
              prize: "10000/- Prize money",
              winners: "-",
              coordinators: "Y.Vinay, Z.Shanth"
            },
            {
              eventName: "Design Challenge",
              topics: "Automobile Design, Aerospace Engineering, HVAC Systems",
              prize: "12000/- Prize money",
              winners: "-",
              coordinators: "A.Akash, B.Preeti"
            },
            {
              eventName: "Tech Quiz",
              topics: "Thermodynamics, Fluid Mechanics, Machine Design",
              prize: "3000/- Prize money",
              winners: "-",
              coordinators: "C.Jyothi, D.Rajesh"
            }
          ],
          CIVIL: [
            {
              eventName: "Poster Presentation",
              topics: "Structural Engineering, Green Buildings, Urban Planning",
              prize: "5000/- Prize money",
              winners: "-",
              coordinators: "E.Kiran, F.Pranay"
            },
            {
              eventName: "Paper Presentation",
              topics: "Earthquake Engineering, Smart Cities, Water Resources",
              prize: "7000/- Prize money",
              winners: "-",
              coordinators: "G.Manoj, H.Arun"
            },
            {
              eventName: "Building Design Expo",
              topics: "Architecture, Urban Planning, Sustainable Development",
              prize: "10000/- Prize money",
              winners: "-",
              coordinators: "I.Venkat, J.Ram"
            },
            {
              eventName: "Surveying Challenge",
              topics: "Land Surveying, GPS, Geotechnical Engineering",
              prize: "9000/- Prize money",
              winners: "-",
              coordinators: "K.Preeti, L.Vikram"
            },
            {
              eventName: "Tech Quiz",
              topics: "Civil Engineering, Construction Management, Transportation",
              prize: "3000/- Prize money",
              winners: "-",
              coordinators: "M.Ravi, N.Suresh"
            }
          ],
          AIML: [
            {
              eventName: "Poster Presentation",
              topics: "Deep Learning, Reinforcement Learning, Natural Language Processing",
              prize: "5000/- Prize money",
              winners: "-",
              coordinators: "O.Pratap, P.Geetha"
            },
            {
              eventName: "Paper Presentation",
              topics: "Artificial Intelligence, Computer Vision, Predictive Analytics",
              prize: "7000/- Prize money",
              winners: "-",
              coordinators: "Q.Harsha, R.Poojitha"
            },
            {
              eventName: "Hackathon",
              topics: "AI for Healthcare, Autonomous Systems, AI Ethics",
              prize: "12000/- Prize money",
              winners: "-",
              coordinators: "S.Anil, T.Rohit"
            },
            {
              eventName: "ML Model Expo",
              topics: "Data Science, AI Tools, Machine Learning Models",
              prize: "10000/- Prize money",
              winners: "-",
              coordinators: "U.Kiran, V.Priya"
            },
            {
              eventName: "Tech Quiz",
              topics: "AI Algorithms, Neural Networks, AI Applications",
              prize: "3000/- Prize money",
              winners: "-",
              coordinators: "W.Sai, X.Kumar"
            }
          ]
    };

    // Get events for the selected department
    const events = eventData[selectedDepartment] || [];

    return (
        <div className="flex flex-col w-full px-6 my-10 md:container md:mx-auto md:px-10">
            <div className="flex mb-5">
                <h1 className="px-3 py-1 text-sm text-left text-gray-500 border border-gray-400 rounded-full md:text-md backdrop-filter backdrop-blur-xl bg-green-400/40 font-poppins">
                    {selectedDepartment} Event List
                </h1>
            </div>
            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Types of Events</th>
                            <th className="border border-gray-300 px-4 py-2">Topics and Rules</th>
                            <th className="border border-gray-300 px-4 py-2">Prizes / Gifts</th>
                            <th className="border border-gray-300 px-4 py-2">Winners</th>
                            <th className="border border-gray-300 px-4 py-2">Coordinators</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event, index) => (
                            <tr key={index}>
                                <td className="px-6 text-xl border font-poppins">{event.eventName}</td>
                                <td className="px-6 py-2 border font-poppins">{event.topics}</td>
                                <td className="px-6 py-2 border font-poppins">{event.prize}</td>
                                <td className="px-6 py-2 text-center border font-poppins">{event.winners}</td>
                                <td className="px-6 py-2 border font-poppins">{event.coordinators}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CseTabs;
