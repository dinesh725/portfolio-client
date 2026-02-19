import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import "./Services.css"
import { Helmet } from "react-helmet-async"


const ServiceCard = ({ icon, title, description, fullDescription, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={`services-box ${isExpanded ? 'expanded' : ''}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: isExpanded ? 1 : 1.05 }}
    >
      <div className="icon-wrapper">
        <i className={`bx ${icon}`}></i>
      </div>
      <h3>{title}</h3>
      <p>{isExpanded ? fullDescription : description}</p>
      <motion.div
        className="service-bg"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.button 
        className="btn" 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </motion.button>
    </motion.div>
  )
}

const Services = () => {
  const services = [
    {
      icon: "bx-code-alt",
      title: "Web Development",
      description:
        "Creating responsive and dynamic websites using modern technologies and best practices to deliver exceptional user experiences.",
      fullDescription:
        "Creating responsive and dynamic websites using modern technologies and best practices to deliver exceptional user experiences. Specializing in:\n\n" +
        "• Front-end Development: React.js, Next.js, HTML5, CSS3, JavaScript\n" +
        "• Back-end Development: Node.js, Express.js, MongoDB, SQL\n" +
        "• Performance Optimization: Code splitting, lazy loading, caching\n" +
        "• Modern Tools: Git, Webpack, npm, Docker\n" +
        "• API Integration: RESTful APIs, GraphQL\n" +
        "• Testing & Deployment: Jest, CI/CD pipelines\n\n" +
        "Committed to writing clean, maintainable code and following industry best practices to create scalable web applications.",
    },
    {
      icon: "bxs-paint",
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing interfaces that enhance user engagement and satisfaction.",
      fullDescription:
        "Designing intuitive and visually appealing interfaces that enhance user engagement and satisfaction. Expertise includes:\n\n" +
        "• User Research: Personas, user journeys, usability testing\n" +
        "• Interface Design: Wireframing, prototyping, responsive design\n" +
        "• Design Tools: Figma, Adobe XD, Sketch\n" +
        "• Design Systems: Component libraries, style guides\n" +
        "• Interaction Design: Micro-interactions, animations\n" +
        "• Accessibility: WCAG guidelines, inclusive design\n\n" +
        "Focus on creating user-centered designs that balance aesthetics with functionality to deliver memorable experiences.",
    },
    {
      icon: "bx-bar-chart-alt",
      title: "Digital Marketing",
      description:
        "Implementing effective digital marketing strategies to increase online presence and reach target audiences.",
      fullDescription:
        "Implementing effective digital marketing strategies to increase online presence and reach target audiences. Services include:\n\n" +
        "• SEO Optimization: On-page, off-page, technical SEO\n" +
        "• Content Marketing: Blog posts, articles, social media content\n" +
        "• Analytics: Google Analytics, data analysis, reporting\n" +
        "• Social Media: Strategy, management, paid advertising\n" +
        "• Email Marketing: Campaign design, automation, A/B testing\n" +
        "• Conversion Rate Optimization: Landing pages, A/B testing\n\n" +
        "Data-driven approach to maximize ROI and achieve measurable results for your business.",
    },
  ]

  return (
    <motion.section
      className="services"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Helmet>
        <title>Services | Dinesh Khatua</title>
      </Helmet>

      <motion.h2
       className="heading"
       initial={{ y: -50, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       viewport={{ once: true }}
      >
        My <span>Services</span>
      </motion.h2>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} delay={index * 0.2} />
        ))}
      </div>
    </motion.section>
  )
}

export default Services
