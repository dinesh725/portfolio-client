// import "./Portfolio.css"

// const projects = [
//   {
//     title: "Web Development",
//     badge: "Frontend",
//     duration: "2 Months",
//     type: "Personal Project",
//     image: "/project1.jpg", // Project background image
//     description:
//       "A responsive web application built with React and Next.js. Features modern UI components and seamless user experience.",
//     technologies: ["React", "Next.js", "Tailwind CSS"],
//     projectUrl: "https://project1.com",
//   },
//   {
//     title: "E-commerce Platform",
//     badge: "Full Stack",
//     duration: "3 Months",
//     type: "Client Project",
//     image: "/project2.jpg", // Project background image
//     description:
//       "Full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.",
//     technologies: ["MERN Stack", "Stripe", "Redux"],
//     projectUrl: "https://project2.com",
//   },
//   {
//     title: "Portfolio Website",
//     badge: "React",
//     duration: "1 Month",
//     type: "Personal Project",
//     image: "/project3.jpg", // Project background image
//     description:
//       "Personal portfolio website showcasing projects and skills. Features smooth animations and responsive design.",
//     technologies: ["React", "Framer Motion", "CSS3"],
//     projectUrl: "https://project3.com",
//   },
//   {
//     title: "Task Manager",
//     badge: "MERN Stack",
//     duration: "2 Months",
//     type: "Team Project",
//     image: "/project4.jpg", // Project background image
//     description: "Collaborative task management application with real-time updates and team features.",
//     technologies: ["MongoDB", "Express", "React", "Node.js"],
//     projectUrl: "https://project4.com",
//   },
// ]

// const Portfolio = () => {
//   return (
//     <section className="portfolio" id="portfolio">
//       <h2 className="heading">
//         Latest <span>Projects</span>
//       </h2>
//       <div className="portfolio-container">
//         {projects.map((project, index) => (
//           <div className="card" key={index}>
//             <div className="content">
//               {/* Back side of the card with project details */}
//               <div className="back">
//                 <div className="back-content">
//                   <h3 className="project-title">{project.title}</h3>
//                   <p className="project-description">{project.description}</p>
//                   <div className="technologies">
//                     {project.technologies.map((tech, i) => (
//                       <span key={i} className="tech-tag">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   {/* Added view project button */}
//                   <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="view-project-btn">
//                     View Project
//                   </a>
//                 </div>
//               </div>
//               {/* Front side of the card with image background */}
//               <div
//                 className="front"
//                 style={{
//                   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <div className="img">
//                   <div className="circle"></div>
//                   <div className="circle" id="right"></div>
//                   <div className="circle" id="bottom"></div>
//                 </div>
//                 <div className="front-content">
//                   <small className="badge">{project.badge}</small>
//                   <div className="description">
//                     <div className="title">
//                       <p className="title">
//                         <strong>{project.title}</strong>
//                       </p>
//                       <svg
//                         fill-rule="nonzero"
//                         height="15px"
//                         width="15px"
//                         viewBox="0,0,256,256"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <g style={{ mixBlendMode: "normal" }} fill="#20c997">
//                           <g transform="scale(8,8)">
//                             <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
//                           </g>
//                         </g>
//                       </svg>
//                     </div>
//                     <p className="card-footer">
//                       {project.duration} &nbsp; | &nbsp; {project.type}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Portfolio

