import React from "react";

import Director from "../Components/Director";

import { LeadershipTeam } from "../Components/LeadershipTeam";
import NewsSection from "../Components/NewsSection";
import Graduates from "../pages/Graduates";
import Facilities from "../Components/Facilities";
import Location from "../Components/Location";
import LocationText from "../Components/LocationText";
interface Props {
  children: React.ReactNode;
}

const Layouts: React.FC<Props> = ({ children }) => {

 return (
    <div className="  min-h-screen ">
     
      
      
      <div className="container mx-auto py-10 flex-1 progress-bar" >{children}</div>
      <Graduates/>
      <Facilities/>
      

      <LeadershipTeam/>


      
      <div className="mt-8 ">
      <Director/>
     
      </div>
      
      
      <div className="mt-16">
      <NewsSection/>
      </div>
      <LocationText/>
      
      <Location/>
     
      
     
      
      
      
      
     

      
    
     
    </div>
  );
};

export default Layouts;



