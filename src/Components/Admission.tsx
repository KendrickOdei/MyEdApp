import { useEffect, useRef } from "react";
import emailjs from 'emailjs-com';





export default function Admission() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) { // Ensure form.current is not null
      emailjs.sendForm('service_mxi90ob', 'template_j0vx3c9', form.current, 'Cv9fwrkusCgzJFXKH')
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again.');
        });
    } else {
      console.error('Form reference is null.');
    }
  };

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
      }, []);


  return (
    <>
     <div className="object-cover mt-6">
        <img src="/SndEll.JPG" alt="" 
        className="w-full h-full bg-center object-cover inset-0 mt-[-30px] min-h-screen"
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
            LEARNER'S PERSONAL DETAILS
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form ref={form} onSubmit={sendEmail} className="space-y-6" >
            <div>
              <label
                htmlFor="surname"
                className="block text-sm font-medium leading-2 text-white"
              >
                Surname
              </label>
              <div className="mt-2">
                <input
                name="surname" 
                type="text"
                 required
                  id="surname"
                  className="block w-full rounded-md border-0 py-1.5 text-black  shadow-sm   placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                 
                />
               
              </div>
            </div>
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-medium leading-2 text-white"
              >
               First name
              </label>
              <div className="mt-2">
                <input
                name="firstname"
                 type="text"
                  required
                  id="firstname"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                 
                />
               
              </div>
            </div>

            <div>
              <label
                htmlFor="othername"
                className="block text-sm font-medium leading-6 text-white"
              >
                Other name
              </label>
              <div className="mt-2">
                <input
                name="othername"
                 type="text"
                  required
                  id="othername"
                  className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />

              </div>
            </div>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Date of Birth
            </h2>
            {/* day of birth */}
            <div className="flex gap-4">
           
            <select
                name="day"
             
                required
                id="day"
                
                className="block w-24 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 overflow-auto max-h-40"
            >
                <option value="">Day</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            {/* month */}

            <select
                name="month"
             
                required
                id="month"
                
                className="block w-24 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 overflow-auto max-h-40"
            >
                <option value="">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
                
            </select>

            <input
                name="year" 
                type="text"
                 required
                  id="year"
                  placeholder=" Year"
                  className="block w-24 rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-2"
                 
              />


            </div>


            <div>
            <label
                htmlFor="class"
                className="block text-sm font-medium leading-6 text-white"
            >
                Class
            </label>
            <div className="mt-2">
            <select
                name="class"
             
                required
                id="class"
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
                htmlFor="fullName"
                className="block text-sm font-medium leading-2 text-white"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                name="fullName" 
                type="text"
                 required
                  id="fullName"
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
            name="phoneNumber" 
             required
              id="phoneNumber"
              type="tel"
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
            Residential (GPS) Address
          </label>
          <div className="mt-2">
            <input
            name="homeAddress" // Updated to match template variable
            id="homeAddress"
            type="text"
            required
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
            name="occupation" // Updated to match template variable
            id="occupation"
            type="text"
            required
              className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          
            />
          </div>
        </div>
        {/* health status */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
         
         <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
           LEARNER'S HEALTH STATUS <br /> Immunization records: (Please select appropriately)
         </h2>
       </div>
       <select
                name="health"
             
                required
                id="health"
                className="block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 overflow-auto max-h-40"
            >
                <option value="">Select health status</option>
                <option value="Tetanus">Tetanus</option>
                <option value="Measles">Measles</option>
                <option value="Pertusis">Pertusis</option>
                <option value="BCG">BCG</option>
                <option value="Diphtheria">Diphtheria</option>
                <option value="Polio">Polio</option>
                
            </select>
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
