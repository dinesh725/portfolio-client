// import { useState } from "react"
// import { Link, useLocation } from "react-router-dom"
// import "./FloatingNav.css"

// const FloatingNav = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const location = useLocation()

//   const isActive = (path) => {
//     return location.pathname === path ? "active" : ""
//   }

//   return (
//     <div className={`floating-nav ${isOpen ? "open" : ""}`}>
//       <button className="floating-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
//         <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}></i>
//       </button>
//       <div className="floating-nav-items">
//         <Link to="/" className={isActive("/")}>
//           <i className="bx bx-home"></i>
//           <span>Home</span>
//         </Link>
//         <Link to="/about" className={isActive("/about")}>
//           <i className="bx bx-user"></i>
//           <span>About</span>
//         </Link>
//         <Link to="/services" className={isActive("/services")}>
//           <i className="bx bx-server"></i>
//           <span>Services</span>
//         </Link>
//         <Link to="/education" className={isActive("/education")}>
//           <i className="bx bx-book"></i>
//           <span>Education</span>
//         </Link>
//         <Link to="/portfolio" className={isActive("/portfolio")}>
//           <i className="bx bx-briefcase"></i>
//           <span>Portfolio</span>
//         </Link>
//         <Link to="/experience" className={isActive("/experience")}>
//           <i className="bx bx-time"></i>
//           <span>Experience</span>
//         </Link>
//         <Link to="/contact" className={isActive("/contact")}>
//           <i className="bx bx-envelope"></i>
//           <span>Contact</span>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default FloatingNav

