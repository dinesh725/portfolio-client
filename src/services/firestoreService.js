// src/services/firestoreService.js
// Replaced Firebase Firestore with REST API calls to a MongoDB Atlas-backed server

// Make sure there's no trailing slash
const API_BASE = import.meta.env.VITE_API_URL || 'https://portfolio-server-one-zeta.vercel.app';
// Function to get all projects
export const getProjects = async () => {
  const res = await fetch(`${API_BASE}/projects`);
  if (!res.ok) throw new Error(`Failed to fetch projects: ${res.status}`);
  return res.json();
};

// Function to add a new project (with optional admin password)
export const addProject = async (project, password) => {
  const res = await fetch(`${API_BASE}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(password ? { 'x-project-password': password } : {}),
    },
    body: JSON.stringify(project),
  });
  if (!res.ok) throw new Error(await res.text() || `Failed to add project: ${res.status}`);
  return res.json();
};

// Function to update an existing project (with optional admin password)
export const updateProject = async (id, updatedProject, password) => {
  const res = await fetch(`${API_BASE}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...(password ? { 'x-project-password': password } : {}),
    },
    body: JSON.stringify(updatedProject),
  });
  if (!res.ok) throw new Error(await res.text() || `Failed to update project: ${res.status}`);
  return res.json();
};

// Function to delete a project (with optional admin password)
export const deleteProject = async (id, password) => {
  const res = await fetch(`${API_BASE}/projects/${id}`, {
    method: 'DELETE',
    headers: password ? { 'x-project-password': password } : {},
  });
  if (!res.ok) throw new Error(await res.text() || `Failed to delete project: ${res.status}`);
  return res.json();
};

// Metadata: get supported technologies for UI options
export const getTechnologiesMeta = async () => {
  const res = await fetch(`${API_BASE}/meta/technologies`);
  if (!res.ok) throw new Error(`Failed to fetch technologies: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data.items) ? data.items : [];
};

// Upload an image file and return its absolute URL
export const uploadImage = async (file) => {
  const form = new FormData();
  form.append('image', file);
  
  try {
    const res = await fetch(`${API_BASE}/upload/image`, {
      method: 'POST',
      body: form,
    });
    
    if (!res.ok) {
      const error = await res.text();
      throw new Error(error || 'Failed to upload image');
    }
    
    const data = await res.json();
    return data.url; // This will be the Cloudinary URL
    
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
};
