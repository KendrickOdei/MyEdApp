

const Hero = () => {


  return (
    <div className="relative w-full  h-screen overflow-hidden mt-[-40px]" >

    <img
          src="/EdView.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      
      <div className="absolute inset-0 flex justify-center items-center text-center tablet">
      <span className="fade-in-slide-in text-white font-bold text-4xl p-1 border-t-2 border-b-2 border-white font-serif sm:text-4xl md:leading-loose ">
        A <br /> TESTIMONY <br /> THAT OUR <br /> LORD IS <br /> GOD <br />JOSHUA 22:34
      </span>
    </div>
    </div>
  );
};


 

export default Hero;
