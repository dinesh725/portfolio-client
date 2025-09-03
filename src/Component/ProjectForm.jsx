// src/components/ProjectForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addProject, updateProject, getProjects, getTechnologiesMeta, uploadImage } from '../services/firestoreService';
// import './ProjectForm.css';

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
    <section className="project-form-section">
      <div className="project-form-card">
        <div className="pf-header">
          <h2>{id ? 'Edit Project' : 'Add New Project'}</h2>
          <p>Share your latest work. Add a title, tech stack, links and features.</p>
        </div>

        <form className="pf-grid" onSubmit={handleSubmit}>
          <div className="pf-field">
            <label htmlFor="title">Title<span>*</span></label>
            <input id="title" required type="text" name="title" value={project.title} onChange={handleChange} placeholder="e.g. Portfolio Website" />
          </div>

          <div className="pf-field pf-col-2">
            <label htmlFor="description">Short Description<span>*</span></label>
            <textarea id="description" required name="description" value={project.description} onChange={handleChange} placeholder="A concise summary of the project" />
          </div>

          <div className="pf-field">
            <label htmlFor="mainTech">Main Technology</label>
            <select id="mainTech" name="mainTech" value={project.mainTech} onChange={handleChange}>
              <option value="">Select main technology</option>
              {techOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="pf-field">
            <label>Technologies (choose up to 3)</label>
            <div className="pf-check-grid">
              {techOptions.map(opt => {
                const checked = ensureArray(project.technologies).includes(opt);
                const disableNew = !checked && selectedCount >= 3;
                return (
                  <label key={opt} className={`pf-check ${checked ? 'checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleTechnology(opt)}
                      disabled={disableNew}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>
            <small>{selectedCount}/3 selected. These drive the icons shown on the card.</small>
          </div>

          <div className="pf-field">
            <label htmlFor="imageFile">Project Image</label>
            <input
              id="imageFile"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            />
            <small>Optional: Upload a file or provide a URL below.</small>
          </div>

          <div className="pf-field">
            <label htmlFor="imageUrl">Image URL</label>
            <input id="imageUrl" type="url" name="imageUrl" value={project.imageUrl} onChange={handleChange} placeholder="https://.../screenshot.jpg" />
          </div>

          <div className="pf-field pf-col-2">
            <label htmlFor="fullDescription">About the Project</label>
            <textarea
              id="fullDescription"
              name="fullDescription"
              value={project.fullDescription}
              onChange={handleChange}
              placeholder="Describe the project: motivation, problems solved, challenges, learnings"
              rows={6}
            />
          </div>

          <div className="pf-field">
            <label htmlFor="demoLink">Demo Link</label>
            <input id="demoLink" type="url" name="demoLink" value={project.demoLink} onChange={handleChange} placeholder="https://your-demo.com" />
          </div>

          <div className="pf-field">
            <label htmlFor="githubLink">GitHub Link</label>
            <input id="githubLink" type="url" name="githubLink" value={project.githubLink} onChange={handleChange} placeholder="https://github.com/username/repo" />
          </div>

          <div className="pf-field pf-col-2">
            <label htmlFor="features">Key Features (comma separated)</label>
            <input id="features" type="text" name="features" value={ensureArray(project.features).join(', ')} onChange={handleChange} placeholder="Auth, Dark Mode, Animations" />
          </div>

          <div className="pf-field pf-col-2">
            <label htmlFor="adminPassword">Admin Password<span>*</span></label>
            <input id="adminPassword" required type="password" name="adminPassword" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="Enter admin password" autoComplete="current-password" />
            <small>This password is not stored; it is only sent with the request to authorize adding/updating projects.</small>
          </div>

          <div className="pf-actions pf-col-2">
            <button className="btn primary" type="submit" disabled={saving}>{saving ? 'Saving...' : (id ? 'Update Project' : 'Add Project')}</button>
            <button className="btn ghost" type="button" onClick={() => navigate('/portfolio')}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProjectForm;
