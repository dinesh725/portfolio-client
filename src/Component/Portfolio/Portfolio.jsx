// src/components/Portfolio.js
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import { getProjects, deleteProject } from '../../services/firestoreService';
import ProjectForm from '../ProjectForm';
import './Portfolio.css';

// Main Portfolio component
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const load = async () => {
    setLoading(true);
    try {
      const projectsData = await getProjects();
      setProjects(projectsData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onEdit = (id) => navigate(`/portfolio/edit/${id}`);

  // Inline-delete API used by ProjectDetails; no prompts/alerts here
  const onDelete = async (id, password) => {
    if (!password) return { ok: false, error: 'Password required' };
    try {
      await deleteProject(id, password);
      await load();
      navigate('/portfolio');
      return { ok: true };
    } catch (e) {
      return { ok: false, error: e?.message || 'Failed to delete' };
    }
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading" initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}>
        Latest <span>Projects</span>
      </h2>

      <Routes>
        <Route path="/" element={
          <div className="portfolio-container">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <button className="add-project-btn" onClick={() => navigate('/portfolio/add')}>
              <span className="plus">+</span>
              <span className="add-project-btn-text">Add Project</span>
            </button>
          </div>
        } />
        <Route path="/project/:id" element={<ProjectView projects={projects} onEdit={onEdit} onDelete={onDelete} />} />
        <Route path="/add" element={<ProjectForm />} />
        <Route path="/edit/:id" element={<ProjectForm />} />
      </Routes>
    </section>
  );
};

// Project detail view component
const ProjectView = ({ projects, onEdit, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return navigate('/portfolio');
  }

  return (
    <ProjectDetails
      project={project}
      onClose={() => navigate('/portfolio')}
      onEdit={() => onEdit(id)}
      onDelete={(password) => onDelete(id, password)}
    />
  );
};

export default Portfolio;
