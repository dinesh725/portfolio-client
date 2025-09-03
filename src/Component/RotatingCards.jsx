import "./RotatingCards.css"

const projects = [
  {
    title: "Web App",
    image: "/project1.jpg",
    color: "142, 249, 252",
  },
  {
    title: "Mobile App",
    image: "/project2.jpg",
    color: "142, 252, 204",
  },
  {
    title: "E-commerce",
    image: "/project3.jpg",
    color: "142, 252, 157",
  },
  {
    title: "Portfolio",
    image: "/project4.jpg",
    color: "215, 252, 142",
  },
  {
    title: "Blog",
    image: "/project5.jpg",
    color: "252, 252, 142",
  },
  {
    title: "Dashboard",
    image: "/project6.jpg",
    color: "252, 208, 142",
  },
]

const RotatingCards = () => {
  return (
    <div className="rotating-cards-container">
      <div className="wrapper">
        <div className="inner" style={{ "--quantity": projects.length }}>
          {projects.map((project, index) => (
            <div key={index} className="card" style={{ "--index": index, "--color-card": project.color }}>
              <div
                className="img"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <a href="http://localhost:5174/" className="btn">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RotatingCards

