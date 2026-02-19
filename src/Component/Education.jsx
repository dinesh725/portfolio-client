import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "./Education.css"
import { Helmet } from "react-helmet-async"

const TimelineItem = ({ year, title, description, isLeft, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      className={`timeline-item ${isLeft ? "left" : "right"}`}
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <div className="timeline-content">
        <div className="date">
          <i className="bx bxs-calendar"></i>
          {year}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <motion.div
          className="timeline-dot"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: delay + 0.3 }}
        />
      </div>
    </motion.div>
  )
}

const Education = () => {
  const education = [
    {
      year: "2022 - 2024",
      title: "Post Graduate with MCA",
      description: "Earned my MCA degree with a 7.8 CGPA and strengthening my technical expertise at Bhadrak Autonomous College.",
    },
    {
      year: "2018 - 2021",
      title: "Graduation with Physics Hons.",
      description: "Graduated with a 85% in Physics from Utkal University and honed my analytical and problem-solving skills.",
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary Education +2",
      description: "Completed my higher secondary education at Jupiter +2 Science College with 60.5% marks and a passion for science.",
    },
    {
      year: "2015 - 2016",
      title: "Matriculation",
      description: "Completed my matriculation at Kakhadi Govt. High School with 87.5% marks and a strong foundation in academics.",
    },
  ]

  const experience = [
    {
      year: "2024/03 - 2024/06",
      title: "Web Developer Intern - StartUp",
      description: "Gained hands-on experience in web development and modern frameworks.",
    }
  ]

  return (
    <motion.section
      className="education"
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Helmet>
        <title>Education | Dinesh Khatua</title>
      </Helmet>

      <motion.h2
        className="heading"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        My <span>Journey</span>
      </motion.h2>

      <div className="timeline-container">
        <div className="timeline-section">
          <h3 className="timeline-title">Education</h3>
          <div className="timeline">
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} isLeft={index % 2 === 0} delay={index * 0.2} />
            ))}
          </div>
        </div>

        <div className="timeline-section">
          <h3 className="timeline-title">Experience</h3>
          <div className="timeline">
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} isLeft={index % 2 === 0} delay={index * 0.2 + 0.4} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Education
