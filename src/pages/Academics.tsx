
import  { useEffect } from "react";

const Academics = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
      }, []);
    return(
        <>

     <div className="object-cover ">
        <img src="/SndEll.JPG" alt="" 
        className="w-full h-full object-cover bg-center inset-0 mt-8 min-h-screen"
        />

        <h1 className='text-2xl text-sky-900 font-bold font-poppins  border-l-4 border-red-700 py-6 p-3 mt-[-20px] ml-4'>
           Academic programs and Curriculum
        </h1>
      </div>

      <div className=" p-8 md:p-0 bg-sky-900 text-white font-bold mt-6 text-left  ml-2 mr-2">

        <p className="p-2">
        At ED Educational Complex, our commitment to academic excellence is reflected in the diverse and rigorous programs we offer. Our curriculum is designed to provide a solid foundation in core subjects while also fostering critical thinking, creativity, and global awareness. We aim to prepare our students for the challenges of the future, ensuring they are well-equipped for both higher education and the professional world.
        </p>

        <p className="p-2">
        Our primary academic framework is based on the Ghana Education Service (GES) curriculum. This curriculum is meticulously structured to cover essential subjects such as Mathematics, Science, English Language, and Social Studies. The GES curriculum emphasizes both theoretical knowledge and practical skills, ensuring students receive a well-rounded education. Regular assessments and evaluations help track student progress and provide tailored support where needed.
        </p>

        <p className="p-2">
        In addition to the GES curriculum, ED Educational Complex offers the Universal Concept of Mental Arithmetic System (UCMAS). This program is designed to enhance the mental calculation abilities of our students, promoting concentration, memory, and overall cognitive development. UCMAS uses an innovative approach that involves both abacus-based learning and mental arithmetic techniques, helping students develop speed and accuracy in mathematical calculations. This not only boosts their confidence in mathematics but also sharpens their problem-solving skills across various disciplines.
        </p>

        <p className="p-2">
        To further enrich our students' academic experience, we have integrated supplementary programs that cater to diverse learning needs and interests. These include:
        </p>

        <ul className="p-2">
            <li   className="p-2"> Our Science, Technology, Engineering, and Mathematics (STEM) programs encourage students to explore these fields through hands-on projects and experiments. We aim to cultivate a passion for innovation and critical thinking from a young age.</li>
            <li className="p-2"> Understanding the importance of communication in a globalized world, we offer language programs that go beyond the standard curriculum. Students can explore additional languages and enhance their proficiency in both local and international languages.</li>
            <li className="p-2">Recognizing the importance of holistic development, our curriculum also includes creative arts, music, and cultural studies. These programs provide students with the opportunity to express themselves, appreciate diverse cultures, and develop a well-rounded personality.</li>
        </ul>
      </div>


        </>

    )
}

export default Academics;