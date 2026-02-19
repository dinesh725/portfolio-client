import "./Experience.css"
import { Helmet } from "react-helmet-async"


const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Helmet>
        <title>Experience | Dinesh Khatua</title>
      </Helmet>

      <h2 className="heading" initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        Work <span>Experience</span>
      </h2>

      <div className="experience-container">


        {/* Internship */}
        <div className="experience-box">
          <h3>Web Developer Intern</h3>
          <h4>Startup Company — 2024/03 to 2024/06</h4>

          <p className="short-text">
            Contributed to website development and gained practical experience in modern web technologies.
          </p>

          <p className="full-text">
            Assisted in designing, developing, and maintaining responsive company websites,
            ensuring cross-browser compatibility and smooth user experience.

            Collaborated with senior developers to implement UI components, fix bugs,
            optimize performance, and improve overall usability.

            Gained practical experience working with HTML, CSS, JavaScript, and React,
            while following clean coding practices and version control workflows.

            Participated in real development cycles including testing, debugging,
            deployment support, and implementing enhancements based on user feedback.
          </p>
        </div>


         {/* MERN Training */}
        <div className="experience-box">
          <h3>MERN Stack Developer Trainee</h3>
          <h4>JSpiders, Bangalore — 2024/09 to 2025/04</h4>

          <p className="short-text">
            Completed advanced MERN stack training and built real-world full-stack applications.
          </p>

          <p className="full-text">
            Completed advanced, real-time training in the MERN stack (MongoDB, Express.js, React.js, Node.js),
            focusing on building scalable and production-ready web applications.

            Developed multiple full-stack projects implementing responsive UI design, RESTful APIs,
            authentication & authorization, database integration, and real-time data handling.

            Strengthened frontend expertise using React, reusable components, state management,
            and performance optimization, while also gaining hands-on experience in backend
            architecture, server-side logic, and database design.

            Followed industry best practices including clean code structure, Git version control,
            debugging strategies, deployment workflows, and project lifecycle management.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience

