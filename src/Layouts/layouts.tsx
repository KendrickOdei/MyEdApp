import React, { useEffect } from "react";
import { useScroll, motion,useSpring } from "framer-motion";

import Director from "../Components/Director";
import Hero from "../Components/hero";
import NavBar from "../Components/NavBar";
import Footer from "../Components/footer";
import ProgressBar from "../Components/progressBar";
import { LeadershipTeam } from "../Components/LeadershipTeam";


interface Props {
  children: React.ReactNode;
}

const Layouts: React.FC<Props> = ({ children }) => {

 return (
    <div className="flex flex-col  bg-sky-900 min-h-screen ">
     
       
     
      <div className="container mx-auto py-10 flex-1 progress-bar" >{children}</div>
    
      
      <LeadershipTeam/>
      <div className="mt-16">
      <Director/>
      </div>
      
      <Director/>
      <Director/>
      <Director/>
     
      
      
      
      
     

      
    
     
    </div>
  );
};

export default Layouts;



