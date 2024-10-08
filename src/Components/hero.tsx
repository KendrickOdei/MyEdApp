import { useEffect } from 'react';

import  './Hero.css'
const Hero = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  
 
  

  return (
    <div className="   z-10 bg-center  " >
    <div className="bg-cover bg-center min-h-screen top-[110px] absolute inset-0 flex justify-center items-center text-center bg-no-repeat" style={{backgroundImage:`url(/SndEll.JPG)`}}>
    
    <span className="mt-4 fade-in-slide-in text-[#ffffff] font-bold text-2xl p-1 border-b-2 border-sky-900 font-serif md:text-4xl md:leading-loose">
        A <br /> TESTIMONY <br /> THAT OUR <br /> LORD IS <br /> GOD <br />JOSHUA 22:34
    </span>
    </div>
    
  
    
      
      
    </div>
   
  );
};


 

export default Hero;
