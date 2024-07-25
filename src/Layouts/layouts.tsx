import React from "react";


import Director from "../Components/Director";

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



