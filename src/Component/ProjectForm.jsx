// src/components/ProjectForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addProject, updateProject, getProjects, getTechnologiesMeta, uploadImage } from '../services/firestoreService';
import './ProjectForm.css';

const ensureArray = (val) => {
  if (Array.isArray(val)) return val;
  if (typeof val === 'string') return val.split(',').map(s => s.trim()).filter(Boolean);
  return [];
};

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [techOptions, setTechOptions] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [project, setProject] = useState({
    title: '',
    description: '',
    mainTech: '',
    technologies: [],
    fullDescription: '',
    imageUrl: '',
    demoLink: '',
    githubLink: '',
    features: [],
  });

  useEffect(() => {
    const fetchProject = async () => {
      if (id) {
        const projectsData = await getProjects();
        const projectToEdit = projectsData.find(p => p.id === id);
        if (projectToEdit) {
          setProject({
            ...projectToEdit,
            technologies: ensureArray(projectToEdit.technologies),
            features: ensureArray(projectToEdit.features),
          });
        }
      }
    };
    const fetchTech = async () => {
      try {
        const items = await getTechnologiesMeta();
        setTechOptions(items);
      } catch (e) {
        console.warn('Failed to load tech options', e);
        setTechOptions(['React','Node','JavaScript','TypeScript','HTML','CSS','Tailwind','Bootstrap','Express','MongoDB']);
      }
    };
    fetchProject();
    fetchTech();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'features') {
      const arr = value.split(',').map(s => s.trim()).filter(Boolean);
      setProject(prev => ({ ...prev, [name]: arr }));
    } else {
      setProject(prev => ({ ...prev, [name]: value }));
    }
  };

  const toggleTechnology = (tech) => {
    setProject(prev => {
      const current = ensureArray(prev.technologies);
      const exists = current.includes(tech);
      let next = current;
      if (exists) next = current.filter(t => t !== tech);
      else if (current.length < 3) next = [...current, tech];
      else next = current; // ignore if already 3
      return { ...prev, technologies: next };
    });
  };

  const selectedCount = Array.isArray(project.technologies) ? project.technologies.length : 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!adminPassword) {
      alert('Admin password is required to submit the project.');
      return;
    }
    if (selectedCount > 3) {
      alert('Please select up to 3 technologies.');
      return;
    }
    setSaving(true);
    try {
      let payload = { ...project };
      // If a file is selected, upload it and set imageUrl to the returned URL
      if (imageFile) {
        try {
          const url = await uploadImage(imageFile);
          payload.imageUrl = url;
        } catch (err) {
          alert(`Image upload failed: ${err.message}`);
          setSaving(false);
          return;
        }
      }
      if (id) {
        await updateProject(id, payload, adminPassword);
      } else {
        await addProject(payload, adminPassword);
      }
      navigate('/portfolio');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={`project-form-container ${saving ? 'saving' : ''}`}>
      <h2>{id ? 'Edit Project' : 'Add New Project'}</h2>
      <p className="form-subtitle">Share your latest work. Add a title, tech stack, links and features.</p>

      <form className="project-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title <span className="required">*</span></label>
          <input
            id="title"
            type="text"
            name="title"
            className="form-control"
            value={project.title}
            onChange={handleChange}
            placeholder="e.g. Portfolio Website"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Short Description <span className="required">*</span></label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={project.description}
            onChange={handleChange}
            placeholder="A concise summary of the project"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mainTech">Main Technology</label>
          <select
            id="mainTech"
            name="mainTech"
            className="form-control"
            value={project.mainTech}
            onChange={handleChange}
          >
            <option value="">Select main technology</option>
            {techOptions.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Technologies (choose up to 3)</label>
          <div className="tech-options">
            {techOptions.map(opt => {
              const isSelected = ensureArray(project.technologies).includes(opt);
              const isDisabled = !isSelected && selectedCount >= 3;
              return (
                <span
                  key={opt}
                  className={`tech-tag ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                  onClick={() => !isDisabled && toggleTechnology(opt)}
                >
                  {opt}
                </span>
              );
            })}
          </div>
          <div className="tech-count">
            {selectedCount}/3 selected
          </div>
        </div>

        <div className="form-group">
          <label>Project Image</label>
          <div className="file-upload">
            <label className="file-label">
              <input
                id="imageFile"
                type="file"
                className="file-input"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              />
              Choose File
            </label>
            {imageFile && <div className="file-name">{imageFile.name}</div>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Or enter image URL</label>
          <input
            id="imageUrl"
            type="url"
            name="imageUrl"
            className="form-control"
            value={project.imageUrl}
            onChange={handleChange}
            placeholder="https://.../screenshot.jpg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="fullDescription">About the Project</label>
          <textarea
            id="fullDescription"
            name="fullDescription"
            className="form-control"
            value={project.fullDescription}
            onChange={handleChange}
            placeholder="Describe the project: motivation, problems solved, challenges, learnings"
            rows={6}
          />
        </div>

        <div className="form-group">
          <label htmlFor="demoLink">Demo Link</label>
          <input
            id="demoLink"
            type="url"
            name="demoLink"
            className="form-control"
            value={project.demoLink}
            onChange={handleChange}
            placeholder="https://your-demo.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="githubLink">GitHub Link</label>
          <input
            id="githubLink"
            type="url"
            name="githubLink"
            className="form-control"
            value={project.githubLink}
            onChange={handleChange}
            placeholder="https://github.com/username/repo"
          />
        </div>

        <div className="form-group">
          <label htmlFor="features">Key Features <small>(comma separated)</small></label>
          <input
            id="features"
            type="text"
            name="features"
            className="form-control"
            value={project.features.join(', ')}
            onChange={handleChange}
            placeholder="Responsive design, Dark mode, User authentication"
          />
        </div>

        <div className="form-group">
          <label htmlFor="adminPassword">Admin Password <span className="required">*</span></label>
          <input
            id="adminPassword"
            type="password"
            className="form-control"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            placeholder="Enter admin password"
            required
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)} disabled={saving}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Saving...' : id ? 'Update Project' : 'Add Project'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
