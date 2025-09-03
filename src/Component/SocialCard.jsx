// From Uiverse.io by vinodjangid07 - Social Media Card with Animated Boxes
const SocialCard = () => {
  return (
    <div className="card">
      {/* Gradient background */}
      <div className="background"></div>

      {/* Card title */}
      <div className="logo">Socials</div>

      {/* Instagram box with animation */}
      <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
        <div className="box box1">
          <span className="icon">
            <i className="bx bxl-instagram"></i>
          </span>
        </div>
      </a>

      {/* Twitter box with animation */}
      <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
        <div className="box box2">
          <span className="icon">
            <i className="bx bxl-twitter"></i>
          </span>
        </div>
      </a>

      {/* Discord box with animation */}
      <a href="https://discord.com/your-discord" target="_blank" rel="noopener noreferrer">
        <div className="box box3">
          <span className="icon">
            <i className="bx bxl-discord"></i>
          </span>
        </div>
      </a>

      {/* Decorative box for animation completion */}
      <div className="box box4"></div>
    </div>
  )
}

export default SocialCard

