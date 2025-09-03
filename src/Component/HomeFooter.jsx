import { useTheme } from "../context/ThemeContext";
import "./HomeFooter.css";

const HomeFooter = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`home-footer`}>
      <div className="footer-content">
        <div className="social-buttons">
          <a
            href="https://www.instagram.com/imdinu._?igsh=NzU0cGVpdml1bG9o"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
          >
            <span className="icon-container">
              <svg viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="btn-bg"></span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100012001455375"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn twitter"
          >
            <span className="icon-container">
            <svg viewBox="0 0 320 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M279.14 288l14.22-92.66h-88.91V129.91c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S261.91 0 225.36 0c-73.62 0-121.47 44.78-121.47 125.22V195.34H22.89V288h81v224h100.17V288z"
                fill="currentColor"
              ></path>
            </svg>

            </span>
            <span className="btn-bg"></span>
          </a>

          <a
            href="https://github.com/dinesh725"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn github"
          >
            <span className="icon-container">
              <svg
                viewBox="0 0 24 24"
                height="1.5em"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                -.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 
                1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 
                3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 
                0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 
                0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 
                3.003-.404 1.02.005 2.047.138 3.006.404 
                2.289-1.552 3.295-1.23 3.295-1.23 
                .655 1.653.243 2.873.12 3.176.77.84 
                1.235 1.911 1.235 3.221 0 4.609-2.804 
                5.624-5.475 5.921.43.372.823 1.102.823 2.222 
                0 1.606-.014 2.898-.014 3.293 
                0 .319.216.694.825.576C20.565 22.092 
                24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </span>
            <span className="btn-bg"></span>
          </a>


          <a
            href="https://www.linkedin.com/in/dinesh-khatua-4755512b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn linkedin"
          >
            <span className="icon-container">
              <svg viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            <span className="btn-bg"></span>
          </a>
        </div>
        <p className="copyright">
          ©2024 Designed by{" "}
          <a
            href="https://www.instagram.com/imdinu._?igsh=NzU0cGVpdml1bG9o"
            target="_blank"
            rel="noopener noreferrer"
            className="designer-link"
          >
            Dinesh Khatua
          </a>
        </p>
      </div>
    </footer>
  );
};

export default HomeFooter;
