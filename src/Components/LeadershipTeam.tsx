import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const LeadershipTeam: React.FC = () => {
  const [currentMember, setCurrentMember] = useState(0); // 0 for Mr. Samuel Okine Doku, 1 for Mr. S, 2 for Mr. M

  const nextMember = () => {
    setCurrentMember((prevMember) => (prevMember === 2 ? 0 : prevMember + 1));
  };

  const prevMember = () => {
    setCurrentMember((prevMember) => (prevMember === 0 ? 2 : prevMember - 1));
  };

  const members = [
    {
      name: 'Mr. Samuel Okine Doku',
      imageUrl: './src/assets/darkHero.jpeg',
      showDirectorMessage: true,
      title: "Director"
    },
    {
      name: 'Mr. Shadrach Simpson',
      imageUrl: './src/assets/img2.JPG',
      showDirectorMessage: false,
      title: 'Administrator'
    },
    {
      name: 'Mr. Makafui Nukunu',
      imageUrl: './src/assets/img3.JPG',
      showDirectorMessage: false,
      title:'Headmaster'
    },
  ];

  return (
    <div  className=" md:ml-8 md:mr-8 ml-4 mr-4 relative mt-[-40px] bg-[rgb(4,9,20)] h-[480px] md:h-[590px]"  style={{backgroundImage:`url(/src/assets/ED DP.png)`}}>
      <div className='border-l-2 border-red-600 py-2 ml-4 mt-2 md:ml-8'>
      <span className="ml-2 text-left md:ml-44 p-2 flex text-white font-bold font-Poppins gap-2 text-xl md:text-4xl">
        Meet our <span className="text-red-500">Leadership</span> team
      </span>
        
      </div>
    
      {/* For small screens, display one member at a time */}
      <div
        
        className="md:hidden  member relative text-base text-white font-bold font-Poppins bg-cover mt-[16px] mb-4 w-[300px] h-[320px] items-center"
        style={{backgroundImage: `url('${members[currentMember].imageUrl}')` }}
      >
        <div className="absolute top-44 left-0 right-0 p-4 text-center font-Poppins">
          <span className="text-sm">{members[currentMember].name}</span>
        </div>
        <div className="absolute top-48 left-0 right-0 p-6 text-center font-bold font-Poppins">
              <span className="text-xl text-sky-600 ">{members[currentMember].title}</span>
        </div>
        {members[currentMember].showDirectorMessage && (
          <NavLink 
          to='/DirectorsMessage'
          className="flex absolute bottom-0  left-1/2 transform -translate-x-1/2 bg-[#3D2252] text-white gap-2 w-full shadow-md cursor-pointer p-2">
            <span className="text-sm font-bold font-Poppins ">Read our Director's message</span>
            <div>
              
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                 stroke="currentColor"
                  className="size-6">
                <path 
                stroke-linecap="round"
                 stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
            </div>
          </NavLink>
        )}
      </div>
      {/* Navigation arrows for small screens */}
      <button
        className="md:hidden absolute top-1/2 left-4 transform -translate-y-1/2 bg-[rgb(49,98,147)] text-white p-2 rounded-full shadow-md font-bold"
        onClick={prevMember}
      >
       <svg 
       xmlns="http://www.w3.org/2000/svg" 
       fill="none"
        viewBox="0 0 24 24"
         stroke-width="1.5"
          stroke="currentColor"
           className="size-6">
        <path 
        stroke-linecap="round"
        stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>

      </button>
      <button
        className="md:hidden absolute top-1/2 right-4 transform -translate-y-1/2 bg-[rgb(49,98,147)] text-white p-2 rounded-full  shadow-md font-bold"
        onClick={nextMember}
      >
        <svg 
        xmlns="http://www.w3.org/2000/svg"
         fill="none" viewBox="0 0 24 24" 
         stroke-width="1.5"
          stroke="currentColor" 
          className="size-6">
        <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>

      </button>

      {/* For medium and larger screens, display all members in a flex box */}
      <div className="hidden md:flex gap-2 mt-4 mb-8 ml-6 mr-6 ">
        {members.map((member, index) => (
          <div
            key={index}
            className="relative mr-2 ml-2 text-base text-white font-bold font-Poppins bg-cover w-[580px] h-[420px]"
            style={{ backgroundImage: `url('${member.imageUrl}')` }}
          >
            <div className="absolute top-0 left-0 right-0 p-4 text-center">
              <span className="text-xl">{member.name}</span>
            </div>
            {member.showDirectorMessage && (
              <NavLink
              to='/DirectorsMessage'
              className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#3D2252] text-white p-2 w-full shadow-md cursor-pointer gap-4">
                <span className="text-xl">Read our Director's message</span>
                <div className='text-4xl font-bold p-2'>

                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5"
                 stroke="currentColor"
                  className="size-6">
                <path 
                stroke-linecap="round"
                 stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>

                </div>
               

              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
