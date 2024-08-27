import { useEffect } from "react";


const GraduationNews = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
    return(
        <>
        {/* picture of graduation ceremony */}
        <div className="object-cover mt-[150px]">
        <img src="/Grd6.JPG" alt="" 
        className="w-full h-full bg-center object-cover inset-0 mt-[-150px] min-h-screen"
        />

        <h1 className='text-2xl text-sky-900 font-bold font-poppins  border-l-4 border-red-700 py-6 p-3 mt-[-20px] ml-4'>
        Celebrating Our First Graduation Ceremony
        </h1>
      </div>
      {/* Graduation summary */}
      <div className='mt-10 mb-4 ml-2 mr-2 shadow-2xl bg-sky-900 text-white p-4'>
        <p>
        We are thrilled to announce that ED EDUCATIONAL COMPLEX recently held its first graduation ceremony for Kindergarten 2 and Basic 6 students. This momentous occasion marks a significant milestone in our school's history and the beginning of a new chapter for our young graduates.

        </p>
        <p className="py-4">
        The graduation ceremony was a day filled with joy, pride, and celebration. Our Kindergarten 2 students, dressed in their adorable graduation caps and gowns, walked the stage with smiles and enthusiasm. They have grown and learned so much during their time with us, and we are incredibly proud of their accomplishments.
        </p>

        <p className="py-4">
        Our Basic 6 graduates also took the spotlight, showcasing their hard work, dedication, and readiness for the next phase of their educational journey. These students have demonstrated exceptional academic achievements, leadership qualities, and a commitment to their studies that we know will serve them well in the future.
        </p>

        <p className="py-4">
        The ceremony featured inspiring speeches from our school principal, dedicated teachers, and a few of our talented students. Each speech highlighted the unique experiences and successes of our graduates, reminding us all of the importance of education and the endless possibilities that lie ahead.
        </p>

        <p className="py-4">
        Our graduates received their diplomas, symbolizing the completion of one chapter and the exciting start of another. Proud parents, family members, and friends cheered on as their loved ones crossed the stage, capturing memories that will be cherished for years to come.

        </p>

        <p className="py-4">
        As we celebrate this significant achievement, we also look forward to the future with great anticipation. Our Kindergarten 2 graduates will soon begin their journey in primary school, where they will continue to explore, learn, and grow. Our Basic 6 graduates are set to embark on their adventures in JHS, equipped with the knowledge, skills, and confidence they have gained at ED EDUCATIONAL COMPLEX.
        </p>
       <p className="py-4">
       We extend our heartfelt congratulations to all our graduates and their families. Your hard work, perseverance, and dedication have brought you to this remarkable moment, and we are excited to see all the wonderful things you will accomplish in the years to come.
       </p>
       <p className="py-4">
       We also want to express our deepest gratitude to our directors, guests, teachers, staff, and the entire ED EDUCATIONAL COMPLEX community. Your support, guidance, and commitment to excellence have made this graduation ceremony possible and have played a crucial role in the success of our students.

       </p>

       <p className="py-4">
       Here's to the first of many more graduations at ED EDUCATIONAL COMPLEX. Congratulations, graduates!
       </p>
      </div>
        </>
    )
}

export default GraduationNews