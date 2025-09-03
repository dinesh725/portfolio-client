import "./Experience.css"

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading" initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        Work <span>Experience</span>
      </h2>

      <div className="experience-container">
        {/* <div className="experience-box">
          <h3>Frontend Developer</h3>
          <h4>Tech Company - 2020-Present</h4>
          <p>
            Led frontend development for multiple projects, implementing responsive designs and optimizing performance.
            Collaborated with cross-functional teams to deliver high-quality web applications.
          </p>
        </div> */}

        <div className="experience-box">
          <h3>Web Developer Intern</h3>
          <h4>StartUp - 2024/03-2024/06</h4>
          <p>
            Assisted in developing and maintaining company websites. Gained hands-on experience with modern web
            technologies and best practices in web development.
          </p>
        </div>

        {/* <div className="experience-box">
          <h3>Freelance Web Designer</h3>
          <h4>Self-employed - 2018-2019</h4>
          <p>
            Designed and developed websites for small businesses and individuals. Managed client relationships and
            delivered projects on time and within budget.
          </p>
        </div> */}
      </div>
    </section>
  )
}

export default Experience

