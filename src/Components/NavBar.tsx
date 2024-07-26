
import  { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import {  motion } from "framer-motion";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);
  const [admissionMenuOpen,setAdmissionsMenuOpen] = useState(false);
  const [studentLifeMenuOpen,setStudentLifeMenuOpen] = useState(false);
  const [contactMenuOpen,setContactMenuOpen] = useState(false)

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  const toggleContactMenu = () =>{
    setContactMenuOpen(!contactMenuOpen);
  }

  const toggleAboutMenu = () => {
   
    setAboutMenuOpen(!aboutMenuOpen);

  };

  const toggleAcademicMenu = () => {
    setAcademicsMenuOpen(!academicsMenuOpen);
    // Uncomment the line below if you want to close the main menu when toggling academicsMenuOpen
    // setIsOpen(false);
  };
  const toggleAdmissionMenu = () =>{
    setAdmissionsMenuOpen(!admissionMenuOpen);
  }
  const toggleStudentMenuOpen = () => {
    setStudentLifeMenuOpen(!studentLifeMenuOpen)
  }

  const closeNavBar = () => {
    setIsOpen(false);
    setAboutMenuOpen(false); // Ensure to close submenu when closing navbar
    setAcademicsMenuOpen(false);
    setAdmissionsMenuOpen(false)
    setStudentLifeMenuOpen(false)
  };

  const listVariants = {
    open: { opacity: 1, },
    closed: { opacity: 0 },
  };

  const itemVariants = {
    open: { opacity: 1, x: 0,type:'spring',stiffness: 60, ease:'easeIn', duration:1 },
    closed: { opacity: 0, x: -100 },
  };

  const handleAboutLeave = () => {
    setAboutMenuOpen(false);
  };
  const handleAcademicsLeave = () => {
    setAcademicsMenuOpen(false);
  };
  const handleAdmissionLeave = () => {
    setAdmissionsMenuOpen(false)
  }
  const handleStudentLeave = () => {
    setStudentLifeMenuOpen(false)
  }
  const handleContactLeave = () => {
    setContactMenuOpen(false)
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <nav className={`navBar fixed top-0 left-0 right-0 z-20 transition-all ${scrolled ? 'scroll-bg' : ''}`}>

    <div className=" px-10 flex justify-between items-center">
    <div className="py-1 top-o left-0 right-0  relative flex justify-between items-center ml-0 mr-0">
       
        <div className="text-white gap-3 font-bold text-xl ml-[-28px] cursor-pointer flex items-center font-Poppins p-3 rounded-md">
          <div className=" p-1 left-0 rounded-md flex items-center border-container">
            <img className="w-10 h-14" src="/ED DP.png" alt="Not Supported" />
            <span className="ml-3 flex md:text-xl ED-TEXT md:font-">
              Ed Educational <br /> Complex
            </span>
          </div>
        </div>

        {/* Navigation Links - visible on large screens */}
        <ul className="hidden md:flex text-center space-x-2 md:mr-auto md:ml-auto md-list">
          <li className="text-xl mr-2 pb-2">
            <NavLink
              
              to="/"
              className="text-white hover:text-gray-400 duration-500 md:border-r-2 md:border-red-600 md:px-2 md:font-bold"
              
              onClick={closeNavBar}
            >
              Home
            </NavLink>
          </li>
          {/* About list on md screen */}
          <li className="text-xl  pb-1 relative">
            <div className="flex items-center">
              <div
                
                className="text-white hover:text-gray-400 duration-500 relative flex items-center hover:decoration hover:underline  cursor-pointer md:border-r-2 md:border-red-600 md:px-1 gap-1 md:font-bold"
                
                
                onMouseEnter={toggleAboutMenu}
                onClick={toggleAboutMenu}
              >
                <span >About Ed</span>
                
                
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
            </div>
            {aboutMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate={aboutMenuOpen ? "open" : "closed"}
                className={`absolute top-8 left-0 mt-0 bg-white p-2 shadow-lg z-50 text-left ml-[-70px]  w-52 transform ${
                  aboutMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0"
                }`}
                onMouseLeave={handleAboutLeave}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/about/history"
                    className="text-sky-900 hover:text-sky-900 duration-5000 block border-l-4 border-red-500 px-2 font-bold"
                    onClick={closeNavBar}
                    
                    
                  >
                    History
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/about/mission"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-pink-500 px-2 font-bold"
                    onClick={closeNavBar}
                 
                  >
                    Mission
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                
                    to="/DirectorsMessage"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-sky-900 px-2 font-bold"
                    onClick={closeNavBar}
                 
                  >
                    Director's message
                  </NavLink>
                </motion.li>
              </motion.div>
            )}
          </li>
          {/* Academics on md screen  */}
          <li className="text-xl  pb-1">
            <div>
              <NavLink
                
                to="/academics"
                className="text-white hover:text-gray-400 duration-500 relative flex items-center md:border-r-2 md:border-red-600 md:px-2 gap-2 md:font-bold"
               
                onMouseEnter={toggleAcademicMenu}
                onMouseLeave={handleAcademicsLeave}
              >
                <span>Academics</span>
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

                
              </NavLink>
            </div>
            {academicsMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute  md:mr-4 mt-[0px] bg-white p-2 shadow-lg z-50 text-left"
                onMouseLeave={handleAcademicsLeave}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/programs"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-orange-500 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Academic Programs
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                   
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-gray-700 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Departments
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-yellow-500 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Curriculum
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-pink-500 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Grading System
                  </NavLink>
                </motion.li>

              </motion.div>
            )}
          </li>
          {/* Admission on md screen */}
          <li className="text-xl  pb-3">
            <NavLink
              
              to="/admission"
              className="text-white hover:text-gray-400 duration-500 md:w-36 md:border-r-2 md:border-red-600 md:px-2 gap-2 md:font-bold"
              
              onMouseEnter={toggleAdmissionMenu}
              onMouseLeave={handleAdmissionLeave}
            >
              <span>Admission</span>
         

              

            </NavLink>
            {admissionMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute  md:mr-4 mt-[0px] bg-white p-2 shadow-lg z-50 text-left"
                onMouseLeave={handleAdmissionLeave}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/programs"
                    className="text-sky-900 flex hover:text-sky-900 duration-500  border-l-4 border-red-500 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Admission Requirements
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-violet-800 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Tuition and Fees
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-pink-800 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Scholarships and Financial Aid
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                   
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-yellow-500 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Application Process
                  </NavLink>
                </motion.li>

              </motion.div>
            )}
          </li>
          {/* Student life on md screen */}
          <li className="text-xl  pb-3">
            <NavLink
              
              to="/admission"
              className="text-white hover:text-gray-400 duration-500 md:w-36 md:border-r-2 md:border-red-600 md:px-2 gap-2 px-4 md:font-bold"
              
              onMouseEnter={toggleStudentMenuOpen}
              onMouseLeave={handleStudentLeave}
            >
             Students Life
     
            </NavLink>
            {studentLifeMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute  md:mr-4 mt-[0px] bg-white p-2 shadow-lg z-50 text-left"
                onMouseLeave={handleStudentLeave}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                   
                    to="/academics/programs"
                    className="text-sky-900 flex hover:text-sky-900 duration-500  border-l-4 border-yellow-500 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Clubs and Organisation
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-white px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Sports and Activities
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-red-900 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Events and Competitions
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-indigo-800 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Students Achievement
                  </NavLink>
                </motion.li>

              </motion.div>
            )}
          </li>
          {/* Contact menu on md screen */}
          <li className="text-xl  pb-3">
            <NavLink
              
              to="/admission"
              className="text-white hover:text-gray-400 duration-500 md:w-36 md:font-bold gap-2"
             
              onMouseEnter={toggleContactMenu}
              onMouseLeave={handleContactLeave}
            >
             Contact
        

            </NavLink>
            {contactMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute  md:mr-4 mt-[0px] bg-white p-2 shadow-lg z-50 text-left"
                onMouseLeave={handleContactLeave}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/programs"
                    className="text-sky-900 flex hover:text-sky-900 duration-500  border-l-4 border-yellow-500 px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Location and Map
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-sky-900 hover:text-sky-900 duration-500 block border-l-4 border-white px-4 font-bold"
                    onClick={closeNavBar}
                  >
                    Feedback Form
                  </NavLink>
                </motion.li>
              
                

              </motion.div>
            )}
          </li>
          
        </ul>

        {/* Menu button (visible on mobile) */}
        <motion.button
          onClick={toggleNavBar}
          className="text-white text-3xl  right-4 top-6 cursor-pointer mt-[4px] ml-[100px] w-10 h-10 md:hidden z-50 font-Poppins font-bold"
          animate={isOpen ? "open" : "closed"}
        >
          {!isOpen ? (
            <svg
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8 bg-orange-700 rounded-full font-bold"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          )}
        </motion.button>

        {/* Mobile Navigation Links */}
        <motion.ul
        variants={listVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={`${
          isOpen ? "block" : "hidden"
        } mt-[-3px] md:hidden md:pb-0 pb-14 p-6 top-28 absolute left-0  md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in-out gap-10 bg-[rgb(4,9,20)] cursor-pointer opacity-10 w-full`}
        style={{ zIndex: isOpen ? "60" : "-1" }}
        transition={{delay:0.2,x:{type:"spring",stiffness:60,opacity:1,ease:"easeIn",duration:1}}}
        >
          {/* Home */}
          <motion.li variants={itemVariants} className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
            <NavLink
              
              to="/"
              className="text-white nav-link  hover:text-gray-400 duration-500 text-xl font-bold font-Poppins  "
              
              onClick={closeNavBar}
              
            >
              Home
            </NavLink>
          </motion.li>
          {/* About Ed */}
          <motion.li variants={itemVariants} className="text-xl md:border-b md:border-gray-300 pb-3 relative">
            <div className="flex items-center">
              <NavLink
                
                to=""
                className="text-white nav-link hover:text-gray-400 duration-500 relative flex items-center font-bold text-xl font-Poppins bottom-b-4 border-red-600"
              
                onClick={toggleAboutMenu}
                
                
              >
                <span>About Ed</span>
                {!aboutMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform md:hidden`}
                    style={{ marginLeft: "45px" }}
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
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform rotate-180 md:hidden`}
                    style={{ marginLeft: "45px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>
            </div>
            {aboutMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute top-30  mt-4 bg-sky-900  p-2  shadow-lg z-50  left-0 "
                transition={{delay:0.2,x:{type:"spring",stiffness:60,opacity:1,ease:"easeIn",duration:1}}}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/about/mission"
                    className="text-white  hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins border-l-4 border-red-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Mission and Vision
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/about/history"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins border-l-4 border-pink-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                    History
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/DirectorsMessage"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins border-l-4 border-yellow-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                   Director's message
                  </NavLink>
                </motion.li>
              </motion.div>
            )}
          </motion.li>
       {/* Academics */}
      {/* Academics */}
      <motion.li variants={itemVariants} className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
            <div className="flex items-center">
              <NavLink
                
                to=""
                className="text-white nav-link hover:text-gray-400 duration-500 flex font-bold text-xl font-Poppins"
                
                onClick={toggleAcademicMenu}
                onMouseDownCapture={toggleAcademicMenu}
                
              >
                <span>Academics</span>
                {!academicsMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform md:hidden`}
                    style={{ marginLeft: "32px" }}
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
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform rotate-180 md:hidden`}
                    style={{ marginLeft: "32px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>
            </div>
            {academicsMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute top-30  mt-2 bg-sky-900 p-2 rounded-md shadow-lg z-50 w-full left-0"
                transition={{delay:0.2,x:{type:"spring",stiffness:60,opacity:1,ease:"easeIn",duration:1}}}
                
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/programs"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-orange-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Academic Programs
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/departments"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-gray-700 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Departments
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/curriculum"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-yellow-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Curriculum
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/academics/grading"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-pink-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Grading System
                  </NavLink>
                </motion.li>
              </motion.div>
            )}
          </motion.li>
          {/* Admissions */}
          <motion.li variants={itemVariants} className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
            <div className="flex items-center">
              <NavLink
                
                to=""
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
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform md:hidden right-8`}
                    style={{ marginLeft: "24px" }}
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
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform rotate-180 md:hidden`}
                    style={{ marginLeft: "24px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>
            </div>
            {admissionMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute top-30 left-0 mt-2 bg-sky-900 p-2 rounded-md shadow-lg z-50 w-full"
                transition={{delay:0.2,x:{type:"spring",stiffness:60,opacity:1,ease:"easeIn",duration:1}}}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/requirements"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-red-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                   Admission Requirements
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                   
                    to="/admission/tuition"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-violet-800 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Tuition and Fees
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/Scholarships"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-pink-800 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Scholarships and Financial Aid
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/application"
                    className="text-white nav-link hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-yellow-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Application Process
                  </NavLink>
                </motion.li>
              </motion.div>
            )}
          </motion.li>
          {/* Students life */}
          
          <motion.li variants={itemVariants} className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
            <div className="flex items-center">
              <NavLink
                
                to=""
                className="text-white hover:text-gray-400 duration-500 flex font-bold text-xl font-Poppins"
                
                onClick={toggleStudentMenuOpen}
                
              >
                <span>Students Life</span>
                {!studentLifeMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform md:hidden`}
                    style={{ marginRight: "4px" }}
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
                    className={`h-6 w-6 ml-2 transition-transform duration-300 transform rotate-180 md:hidden`}
                    style={{ marginRight: "2px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>
            </div>
            {studentLifeMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute top-30 left-0 mt-2 bg-sky-900 p-2 rounded-md shadow-lg z-50 w-full"
                transition={{delay:0.2,x:{type:"spring",stiffness:60,opacity:1,ease:"easeIn",duration:1}}}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/requirements"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-yellow-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                   Clubs and Organization
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/tuition"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-white px-4"
                    onClick={closeNavBar}
                  
                  >
                    Sports & Activities
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/Scholarships"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-red-900 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Events and Competitions
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/application"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-indigo-800 px-4"
                    onClick={closeNavBar}
                    
                  >
                    Student Achievements
                  </NavLink>
                </motion.li>
              </motion.div>
            )}
          </motion.li>
          {/* Contacts menu */}
          

          <motion.li variants={itemVariants} className="text-xl md:border-b md:border-gray-300 pb-3 cursor-pointer">
            <div className="flex items-center">
              <NavLink
                
                to=""
                className="text-white nav-link hover:text-gray-400 duration-500 flex font-bold text-xl font-Poppins"
                
                onClick={toggleContactMenu}
                
              >
                <span>Contact Us</span>
                {!contactMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`h-6 w-6 ml-7 transition-transform duration-300 transform md:hidden`}
                    style={{ marginRight: "24px" }}
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
                    className={`h-6 w-6 ml-7 transition-transform duration-300 transform rotate-180 md:hidden`}
                    style={{ marginRight: "24px" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </NavLink>
            </div>
            {contactMenuOpen && (
              <motion.div
                variants={listVariants}
                initial="closed"
                animate="open"
                className="absolute top-30 left-0 mt-2 bg-sky-900 p-2 rounded-md shadow-lg z-50 w-full"
                transition={{delay:0.2,x:{type:"spring",stiffness:60,opacity:1,ease:"easeIn",duration:1}}}
              >
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                    
                    to="/admission/requirements"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-yellow-500 px-4"
                    onClick={closeNavBar}
                    
                  >
                   Location and map
                  </NavLink>
                </motion.li>
                <motion.li variants={itemVariants} className="text-lg py-1">
                  <NavLink
                   
                    to="/admission/tuition"
                    className="text-white hover:text-gray-400 duration-500 block font-bold text-xl font-Poppins ml-6 border-l-4 border-white px-4"
                    onClick={closeNavBar}
                    
                  >
                    Feedback form
                  </NavLink>
                </motion.li>
                
                
              </motion.div>
            )}
          </motion.li>
          
    </motion.ul>
   

    


        

      </div>
    </div>
    </nav>
    </>
  );
};
export default NavBar;
