

import  { useState } from "react";
import { NavLink } from "react-router-dom";
import {  motion } from "framer-motion";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
 
  const [admissionMenuOpen,setAdmissionsMenuOpen] = useState(false);
  


  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };


  const toggleAboutMenu = () => {
   
    setAboutMenuOpen(!aboutMenuOpen);

  };

  const toggleAdmissionMenu = () =>{
    setAdmissionsMenuOpen(!admissionMenuOpen);
  }
 

  const closeNavBar = () => {
    setIsOpen(false);
    setAboutMenuOpen(false); // Ensure to close submenu when closing navbar
   
    setAdmissionsMenuOpen(false)
  
  };



  const handleAboutLeave = () => {
    setAboutMenuOpen(false);
  };
  
 
 

 
  


  return (
    <>
    <nav className="w-full navBar fixed top-0 left-0 right-0 z-50 bg-sky-950 ">

    <div className="py-1 md:px-10 px-2 relative flex justify-between items-center  w-full">
    
       
        <div className="text-white gap-3 cursor-pointer font-bold text-xl ml-[-28px]  flex items-center font-Poppins p-3 rounded-md">
          
          <NavLink
          to='/home'
          >
            <div>
          <div className=" p-1 left-0 rounded-md flex items-center border-container ml-4">
            <img className="w-10 h-14" src="/lOGO.jpg" alt="Not Supported" />
            <span className="ml-3 flex md:text-xl ED-TEXT md:font- text-left">
              Ed <br /> Educational <br /> Complex
            </span>
          </div>
            </div>
          </NavLink>
            
          
        
         
        </div>

        {/* Navigation Links - visible on large screens */}
        <ul className="hidden md:flex text-center space-x-2 md:mr-auto md:ml-auto md-list">
          <li className="text-xl mr-2 pb-2">
            <NavLink
              
              to="/home"
              className="text-white hover:text-gray-400 duration-500 md:border-r-4 md:border-red-600 md:px-2 md:font-bold"
              
              onClick={closeNavBar}
            >
              Home
            </NavLink>
          </li>
          {/* About list on md screen */}
          <li className="text-xl  pb-1 relative"
          onMouseEnter={toggleAboutMenu}
          onMouseLeave={handleAboutLeave}
          onClick = {toggleAboutMenu}
          >
            <div className="flex items-center">
              <div
                
                className="text-white hover:text-gray-400 duration-500 relative flex items-center   cursor-pointer md:border-r-4 md:border-red-600 md:px-1 gap-1 md:font-bold"
                
                
                
                
                
              >
                
                <span >About</span>
                
                
                <svg
                 xmlns="http://www.w3.org/2000/svg" 
                 fill="none"
                viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                 
                  >
                    <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>

               
                

                
               
              </div>
              {aboutMenuOpen && (
              <div
              
               
                className={`absolute top-8 left-0 mt-0 bg-white p-2 shadow-lg z-50 text-left ml-[-70px]  w-52 transform ${
                  aboutMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0"
                }`}
                
                
              >
                <li className="text-lg py-1">
                  <NavLink
                    
                    to="/AboutEd"
                    className="text-sky-900 hover:text-sky-900 duration-5000 block border-l-4 border-red-500 px-2 font-bold"
                    onClick={closeNavBar}
                    
                    
                  >
                    About Ed
                  </NavLink>
                </li>
                
                <li  className="text-lg py-1">
                  <NavLink
                
                    to="/DirectorsMessage"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-sky-900 px-2 font-bold"
                    onClick={closeNavBar}
                 
                  >
                    Director's message
                  </NavLink>
                </li>
              </div>
            )}
            </div>
            
          </li>
          {/* Academics on md screen  */}
          <li className="text-xl  pb-1"
          
           onClick={closeNavBar}
          >
            <div>
              <NavLink
                
                to="/Academics"
                className="text-white hover:text-gray-400 duration-500 relative flex items-center md:border-r-4 md:border-red-600 md:px-2 gap-2 md:font-bold"
               
               
              >
                <span>Academics</span>
                

                
              </NavLink>
            </div>
           
          </li>
          {/* Admission on md screen */}
          <li className="text-xl  pb-3"
            
           
          >
            <NavLink
              
              to="/Admission"
              className="text-white hover:text-gray-400 duration-500 relative flex items-center md:border-r-4 md:border-red-600 md:px-2 gap-2 md:font-bold"
              
            
            >
              <span>Admission</span>
              
         

              

            </NavLink>
            
          </li>
          {/* Student life on md screen */}
          <li className="text-xl  pb-3"
           onClick={closeNavBar}
        
          
          >
            <NavLink
              
              to="/StudentLife"
              className="text-white hover:text-gray-400 duration-500 relative flex items-center md:border-r-4 md:border-red-600 md:px-2 gap-2 md:font-bold"
              
             
            >
             Students Life
             
     
            </NavLink>
            
          </li>
         
          
        </ul>

        {/* Menu button (visible on mobile) */}
        <button
          onClick={toggleNavBar}
          className="text-white text-4xl mr-4 right-4 top-6 cursor-pointer mt-[4px]  w-10 h-10 md:hidden z-50 font-Poppins font-bold"
         
        >
          {!isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 ">
            <path fill-rule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
          </svg>
          
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 bg-red-700 rounded-full font-bold ml-2 mt-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          )}
        </button>

        {/* Mobile Navigation Links */}
        <motion.ul
        
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden md:pb-0 pb-14 p-6 top-[105px] absolute py-8 right-0 md:w-auto md:pl-0 pl-9 transition-transform duration-700 ease-in-out gap-10 bg-[rgb(4,9,20)] cursor-pointer w-full overflow-hidden z-50`}
        style={{ zIndex: isOpen ? "60" : "-1" }}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? '0%' : '100%' }}
        transition={{ duration: 0.1 }}
        
        >
          {/* Home */}
          <li className="text-xl md:border-b md:border-gray-300 pb-3  cursor-pointer">
            <NavLink
              
              to="/"
              className="text-white nav-link  hover:text-gray-400 duration-500 text-xl font-bold font-Poppins  "
              
              onClick={closeNavBar}
              
            >
              Home
            </NavLink>
          </li>
               {/* About Ed */}
          <li  className="text-xl md:border-b md:border-gray-300 pb-3 relative ">
            <div className="flex items-center">
              <div
                
               
                className="text-white  nav-link hover:text-gray-400 duration-500   flex items-center font-bold text-xl font-Poppins "
              
                onClick={toggleAboutMenu}
                
                
              >
                <span>About</span>
                {!aboutMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 absolute right-1 transition-transform duration-300 transform md:hidden`}
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 absolute right-1 transition-transform duration-300 transform rotate-180 md:hidden`}
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </div>
            {aboutMenuOpen && (
              <div
             
                className=" top-30  mt-2 bg-sky-900 p-2 rounded-md shadow-lg z-50 w-full left-0"
                
              >
                <li  className="text-lg py-1">
                  <NavLink
                    
                    to="/AboutEd"
                    className="text-white  hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins border-l-4 border-red-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                    About Ed
                  </NavLink>
                </li>
                
                <li  className="text-lg py-1">
                  <NavLink
                    
                    to="/DirectorsMessage"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins border-l-4 border-yellow-500 px-4"
                    onClick={closeNavBar}
                    
                    
                  >
                   Director's message
                  </NavLink>
                </li>
              </div>
            )}
          </li>
       {/* Academics */}
      {/* Academics */}
      <li className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
        <NavLink
        to='/Academics'
        onClick={closeNavBar}
        >

        <div className="flex items-center">
              <div
                
                
                className="text-white nav-link hover:text-gray-400 duration-500 flex font-bold text-xl font-Poppins"
                
                
            
                
              >
                <span>Academics</span>
                
                
              </div>
            </div>

        </NavLink>
            
            
          </li>
          {/* Admissions */}
          <li  className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
            <div className="flex items-center">
              <div
                
                
                className="text-white hover:text-gray-400 duration-500 flex font-bold text-xl font-Poppins"
                
                onClick={toggleAdmissionMenu}
                
              >
                <span>Admissions</span>
                {!admissionMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 absolute right-6 transition-transform duration-300 transform md:hidden `}
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 absolute right-6 transition-transform duration-300 transform rotate-180 md:hidden`}
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </div>
            {admissionMenuOpen && (
              <div
                
                className=" top-30 left-0 mt-2 bg-sky-900 p-2 rounded-md shadow-lg z-50 w-full h-full"
                
              >
                <li  className="text-lg py-1">
                  <NavLink
                    
                    to="/Admission"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-red-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                   Admission Process
                  </NavLink>
                </li>
                
                <li className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/Scholarships"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-pink-800 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Scholarships and Financial Aid
                  </NavLink>
                </li>
                
              </div>
            )}
          </li>
          {/* Students life */}
          
          <li  className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
            
            <NavLink className="flex items-center"
            to='/StudentLife'
            onClick={closeNavBar}
            >
              <div
                
                
                className="text-white hover:text-gray-400 duration-500 flex font-bold text-xl font-Poppins"
                
                
                
              >
                <span>Students Life</span>
                
              </div>
            </NavLink>
           
          </li>
          
    </motion.ul>
   

    


        

      </div>
    
    </nav>
    
    </>
  );
};
export default NavBar;
