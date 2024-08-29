
import  { useEffect } from "react";

const AboutEd = () => {

 

 
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top when the component mounts
    }, []);
    
  

    return (
        <>
        <div className="object-cover ">
        <img src="/Cadet.JPG" alt="" 
        className="w-full h-full object-cover bg-center inset-0 mt-[-150px] min-h-screen"
        />

        <h1 className='text-2xl text-sky-900 font-bold font-poppins  border-l-4 border-red-700 py-6 p-3 mt-[-20px] ml-4'>
           About Ed
        </h1>
      </div>
      <div className=" p-8 md:p-0 bg-sky-900 text-white font-bold mt-6 text-left  ml-2 mr-2">
        <p className="md:ml-8 md:mr-8 p-2">
            Ed Educational Complex was established in the year 2017 to offer quality education to children in and around Mataheko and adjoining vicinities. The
            bedrock of the institution is the reliance on Christ (The Great Teacher). For this reason, Ed Educational Complex focuses on raising God fearing children who uphold discipline and godliness.
            The name Ed is taken from the book of Joshua 22:34.
        </p>
        <p className="md:ml-8 md:mr-8 p-2">
            The motto of the school has a biblical foundation underscoring the Christian faith of the Directors of the school. The motto can be found in Joshua 22:34 which simply read "A testimony that our Lord is God".

        </p>
        <p className="md:ml-8 md:mr-8 p-2">
            Ed was established to provide Christ centered, affordable and quality education with integrity that all can trust. The vision is to become the Christ centered educational facility of choice, educate
            generations and create lasting change for Ghana and beyond.
        </p>
        <p className="md:ml-8 md:mr-8 p-2">
            The school is a private entity controlled by the directors of the company. Therefore the Directors are the highest decision making authority and have the final say in all matters.
        </p>

        <p className="md:ml-8 md:mr-8 p-2">
            The day-to-day running of the school is by the Administrator spearheading the administrative duties and the Head teacher managing the academics of the school.As such all matters relating
            to administration should be directed to the school Administrator. Likewise, all matters relating to academics should be routed through the Head teacher.
        </p>

      </div>
      </>
      

    )
}

export default AboutEd;