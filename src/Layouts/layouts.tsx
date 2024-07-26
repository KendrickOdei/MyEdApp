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
      <div className="mt-32 ">
      <LeadershipTeam/>

      </div>
      
      
      <div className="mt-16">
      <Director/>
      </div>
      
      
     
      
      
      
      
     

      
    
     
    </div>
  );
};

export default Layouts;



