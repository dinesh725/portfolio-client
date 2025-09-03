import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./ProjectCard.css"
import React from "react";


// Tech stack icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3 } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap, SiMongodb, SiExpress } from "react-icons/si"

const techIcons = {
  React: FaReact,
  Node: FaNodeJs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: FaHtml5,
  CSS: FaCss3,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  MongoDB: SiMongodb,
  Express: SiExpress,
}

const resolveIconKey = (value) => {
  if (!value) return null;
  const v = String(value).trim().toLowerCase();
  const map = {
    'react': 'React',
    'reactjs': 'React',
    'react.js': 'React',

    'node': 'Node',
    'nodejs': 'Node',
    'node.js': 'Node',

    'javascript': 'JavaScript',
    'js': 'JavaScript',

    'typescript': 'TypeScript',
    'ts': 'TypeScript',

    'html': 'HTML',
    'html5': 'HTML',

    'css': 'CSS',
    'css3': 'CSS',

    'tailwind': 'Tailwind',
    'tailwindcss': 'Tailwind',

    'bootstrap': 'Bootstrap',

    'mongodb': 'MongoDB',
    'mongo': 'MongoDB',

    'express': 'Express',
    'expressjs': 'Express',
    'express.js': 'Express',
  };
  return map[v] || null;
};


const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  const mainIconKey = resolveIconKey(project.mainTech);

  return (
    <div className="parent">
      <div className="card">
        {/* Glass effect overlay */}
        <div className="glass"></div>

        {/* Circular logo elements */}
        <div className="logo">
          <span className="circle circle1"></span>
          <span className="circle circle2"></span>
          <span className="circle circle3"></span>
          <span className="circle circle4"></span>
          <span className="circle circle5">
            {/* Project type icon */}
            {mainIconKey && techIcons[mainIconKey] && React.createElement(techIcons[mainIconKey])}
          </span>
        </div>

        {/* Project content */}
        <div className="content">
          <span className="title">{project.title}</span>
          <span className="text">{project.description}</span>
        </div>

        {/* Bottom section with tech stack and view button */}
        <div className="bottom">
          <div className="social-buttons-container">
            {(project.technologies || []).slice(0, 3).map((tech, index) => {
              const key = resolveIconKey(tech);
              const Icon = key ? techIcons[key] : null;
              return (
                <button key={index} className="social-button" title={tech}>
                  {Icon && React.createElement(Icon)}
                </button>
              );
            })}
          </div>
          <div className="view-more">
            <button className="view-more-button" onClick={() => navigate(`/portfolio/project/${project.id}`)}>
              View Project
            </button>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
