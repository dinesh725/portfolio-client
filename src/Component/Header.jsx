import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <label className="switch" htmlFor="switch">
            <input id="switch" type="checkbox" className="circle" checked={!isDark} onChange={toggleTheme} />
            <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="moon svg">
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
            </svg>
            <div className="sun svg">
              <span className="dot"></span>
            </div>
          </label>
        </div>

        <div className="header-right">
          <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
            <Link to="/" className={isActive("/")} onClick={closeMenu}>Home</Link>
            <Link to="/about" className={isActive("/about")} onClick={closeMenu}>About</Link>
            <Link to="/services" className={isActive("/services")} onClick={closeMenu}>Services</Link>
            <Link to="/education" className={isActive("/education")} onClick={closeMenu}>Education</Link>
            <Link to="/portfolio" className={isActive("/portfolio")} onClick={closeMenu}>Portfolio</Link>
            <Link to="/experience" className={isActive("/experience")} onClick={closeMenu}>Experience</Link>
            <Link to="/contact" className={isActive("/contact")} onClick={closeMenu}>Contact</Link>
          </nav>

          <div className="menu-toggle">
            <input
              id="menu-checkbox"
              type="checkbox"
              checked={isMenuOpen}
              onChange={() => setIsMenuOpen(!isMenuOpen)}
            />
            <label className="toggle" htmlFor="menu-checkbox">
              <div id="bar1" className="bars"></div>
              <div id="bar2" className="bars"></div>
              <div id="bar3" className="bars"></div>
            </label>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header