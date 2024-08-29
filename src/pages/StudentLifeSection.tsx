import { useEffect } from "react";

const StudentLifeSection = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts
      }, []);
    return(
        <>
            {/* picture of graduation ceremony */}
        <div className="object-cover mt-[150px]">
        <img src="/Class.JPG" alt="" 
        className="w-full h-full bg-center object-cover inset-0 mt-[-150px] min-h-screen"
        />

        <h1 className='text-xl text-sky-900 font-bold font-poppins  border-l-4 border-red-700 py-6 p-3 mt-[-20px] ml-4'>
          A Day in the Life of a Student at ED Educational Complex
        </h1>
       </div>

       {/* body */}
       <div className="mt-10 mb-4 ml-2 mr-2 shadow-2xl bg-sky-900 text-white p-4">
            <p className="p-2">
            Student life at ED Educational Complex is a vibrant tapestry of learning, exploration, and growth. From the moment students walk through the gates until they leave at the end of the day, they are immersed in an environment that nurtures both their academic and personal development. Here’s a glimpse into a typical day at our school.
            </p>

            <p className="p-2">
            The day begins with a warm welcome at the school gates, where students are greeted by friendly teachers and staff. The morning assembly follows, a time for students to gather, share important announcements, and participate in motivational talks that set the tone for the day.
            </p>

            <p className="p-2">
            In the classroom, learning is an interactive and engaging experience. Teachers at ED Educational Complex employ innovative teaching methods that encourage critical thinking and creativity. Whether it’s a lively discussion in literature class or a hands-on experiment in science, students are always encouraged to explore and question.
            </p>

            <p className="p-2">
            Lunchtime and breaks are a much-anticipated part of the day, giving students a chance to relax, socialize, and recharge. The school playground and common areas buzz with activity as students play games, share stories, and build friendships that often last a lifetime.
            </p>

            <p className="p-2">
            Beyond academics, ED Educational Complex offers a wide range of extracurricular activities. From sports teams to music clubs, students have the opportunity to discover new interests and develop skills outside the classroom. These activities foster teamwork, discipline, and a sense of achievement.
            </p>

            <p className="p-2">
            The afternoon is dedicated to more focused learning, where students dive deeper into their subjects. Group projects and collaborative work are common, allowing students to learn from each other and build strong teamwork skills.
            </p>

            <p className="p-2">
            As the school day comes to a close, students reflect on what they’ve learned and prepare for the next day. Many students also participate in after-school programs or tutoring sessions, ensuring they have all the support they need to succeed.
            </p>

            <p className="p-2">
            At ED Educational Complex, student life is about more than just academics; it’s about developing well-rounded individuals who are ready to take on the world. Every day is a step toward becoming thoughtful, confident, and capable leaders of tomorrow.
            </p>
       </div>

        </>
    )
}

export default StudentLifeSection;