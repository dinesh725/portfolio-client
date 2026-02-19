import React, { useState } from 'react';
import './About.css';
import { Helmet } from 'react-helmet-async';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent = (
    <>
      <h1 className="about-heading">
        Passionate about blending technical expertise with artistic innovation to craft 
        visually stunning web experiences. Proficient in <strong>HTML5</strong>, <strong>CSS3</strong>, 
        and <strong>JavaScript (ES6+)</strong>, with expertise in <strong>ReactJS</strong>, 
        <strong> Bootstrap</strong>, and <strong>Tailwind CSS</strong>.
      </h1>
    </>
  );

  const fullContent = (
    <>
      {truncatedContent}
      <h1 className="about-heading">
        🚀 <strong>Key Strengths</strong>: Expertise in full-stack integration using <strong>MySQL</strong>, 
        creative problem-solving, and building responsive interfaces. Strong collaborator with 
        focus on performance optimization and clean code architecture.
      </h1>
      <h1 className="about-heading">
        ✨ Passionate about UI/UX best practices and creating engaging digital experiences 
        that tell compelling stories through interactive elements.
      </h1>
      <h1 className="about-heading">
      Dynamic and ambitious MCA candidate with a strong foundation in computer science and a passion for web development. Graduating from Bhadrak Autonomous College with a 7.8 GPA, I bring a solid academic background coupled with hands-on experience in MERN stack development gained through an internship at Boostr Netwave Pvt. Ltd.
      </h1>
      <h1 className="about-heading">
      My technical toolkit includes proficiency in HTML5, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, and MySQL, positioning me well for entry-level roles in web development and software engineering. As a fresh graduate, I offer a blend of theoretical knowledge and practical skills, along with a keen enthusiasm to learn and adapt in a fast-paced tech environment.
      </h1>
      <h1 className="about-heading">During my internship, I demonstrated strong dedication and contributed meaningfully to team projects, showcasing my ability to apply classroom learning to real-world challenges. My academic journey, spanning from a B.Sc. in Physics (84%) to my current MCA program, reflects my commitment to continuous learning and my ability to excel in diverse subject areas.</h1>
      <h1 className="about-heading">Fluent in English, Hindi, and Odia, I possess the communication skills necessary to collaborate effectively in multicultural teams. My interests in coding, outdoor activities, and music underscore my well-rounded personality and ability to maintain a healthy work-life balance.</h1>
      <h1 className="about-heading">I am eager to leverage my skills, fresh perspective, and passion for technology to contribute innovative solutions and grow alongside a forward-thinking organization. Ready to take on new challenges and make a significant impact in the field of software development.</h1>
    </>
  );

  return (
    <section className={`about-section ${isExpanded ? 'expanded' : ''}`}>
        <Helmet>
          <title>About | Dinesh Khatua</title>
        </Helmet>
      
      <div className={`about-content ${isExpanded ? 'expanded' : ''}`}>
        <h1 className='about-me'>Hello There  So I'm A</h1>
      <h2 className="about-title">Creative Frontend Web Developer !!</h2>
        {isExpanded ? fullContent : truncatedContent}
        <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="btn-more"
      >
        {isExpanded ? (
          <>
            Show Less
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="about-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg> */}
          </>
        ) : (
          <>
            Read More
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="about-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg> */}
          </>
        )}
      </button>
      </div>

     
    </section>
  );
};

export default AboutSection;