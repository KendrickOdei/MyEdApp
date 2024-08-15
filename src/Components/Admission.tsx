
import { useEffect } from "react";





export default function Admission() {
 

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
      }, []);


  return (
    <>
     <div className="object-cover mt-6">
        <img src="/SndEll.JPG" alt="" 
        className="w-full h-full bg-center object-cover inset-0 mt-[-150px] min-h-screen"
        />

        <h1 className='text-2xl text-sky-900 font-bold font-poppins  border-l-4 border-red-700 py-6 p-3 mt-[-20px] ml-4'>
           Admission
        </h1>
      </div>
      <div className="text-sky-900 ml-2 mr-2">
        
       <blockquote className="font-bold text-2xl">Dear Prospective Parent/Guardian,</blockquote> 
        <p>
        Thank you for your interest in enrolling your child at our institution. To help us understand your needs, please fill out the form below. Our Administrators will contact you within the next 24 hours to discuss the enrollment process for classes from Creche to Basic 9.
        </p>
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-sky-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Student's Details
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-2 text-white"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm   placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                 
                />
               
              </div>
            </div>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-2 text-white"
              >
               Second Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                 
                />
               
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-white"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />

              </div>
            </div>

            <div>
            <label
                htmlFor="grade"
                className="block text-sm font-medium leading-6 text-white"
            >
                Class
            </label>
            <div className="mt-2">
            <select
                id="grade"
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 overflow-auto max-h-40"
            >
                <option value="">Select Class</option>
                <option value="Creche">Creche</option>
                <option value="Nursery1">Nursery 1</option>
                <option value="Nursery2">Nursery 2</option>
                <option value="KG1">KG 1</option>
                <option value="KG2">KG 2</option>
                <option value="Grade1">Class 1</option>
                <option value="Grade2">Class 2</option>
                <option value="Grade3">Class 3</option>
                <option value="Grade4">Class 4</option>
                <option value="Grade5">Class 5</option>
                <option value="Grade6">Class 6</option>
                <option value="Grade7">Class 7</option>
                <option value="Grade8">Class 8</option>
                <option value="Grade9">Class 9</option>
            </select>
            </div>
            </div>


            <div>
              
            </div>


            
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
         
         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
           Parent/Guardian's Details
         </h2>
       </div>
       {/* Full Name */}
       <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-2 text-white"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                 
                />

               
        </div>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium leading-6 text-white"
          >
            Phone Number
          </label>
          <div className="mt-2">
            <input
              id="phoneNumber"
              type="tel"
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
             
            />
          </div>
          </div>
          {/* Email */}
          <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-white"
          >
            Email Address
          </label>
          <div className="mt-2">
            <input
              id="email"
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
       
            />
          </div>
          </div>
        
        
        {/* Home Address */}
        <div className="mb-4">
          <label
            htmlFor="homeAddress"
            className="block text-sm font-medium leading-6 text-white"
          >
            Home Address
          </label>
          <div className="mt-2">
            <input
              id="homeAddress"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              
            />
          </div>
        </div>

        {/* Occupation */}
        <div className="mb-4">
          <label
            htmlFor="occupation"
            className="block text-sm font-medium leading-6 text-white"
          >
            Occupation
          </label>
          <div className="mt-2">
            <input
              id="occupation"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          
            />
          </div>
        </div>
        {/* submit button */}
             <div>
              <button
                type="submit"
                className="flex w-full  justify-center rounded-md bg-green-700 bg-opacity-50 px-3 py-1.5 text-xl font-bold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-900"
              >
                Submit
              </button>
            </div>
        
        
        </form>

          
        </div>
        
       <div className="max-w-4xl mx-auto p-6  rounded-lg ">
      
        

        

        
        

        

       
       
      
    </div>
       
      </div>
    </>
  );
}
