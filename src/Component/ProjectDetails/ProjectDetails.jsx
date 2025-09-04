import { motion } from "framer-motion"
import { useState } from "react"
import "./ProjectDetails.css"
import { FaTrash, FaEdit } from "react-icons/fa"

const ProjectDetails = ({ project, onClose, onEdit, onDelete }) => {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [pwd, setPwd] = useState("")
  const [delMsg, setDelMsg] = useState("")
  const [delErr, setDelErr] = useState("")
  const [deleting, setDeleting] = useState(false)
  const handleEdit = () => {
    if (onEdit) onEdit()
  }
  const handleDelete = () => {
    setConfirmOpen((v) => !v)
    setDelMsg("")
    setDelErr("")
  }
  const doConfirmDelete = async () => {
    if (!onDelete) return
    if (!pwd) { setDelErr('Password required'); return }
    setDeleting(true)
    setDelMsg("")
    setDelErr("")
    const res = await onDelete(pwd)
    setDeleting(false)
    if (res?.ok) {
      setDelMsg('Project deleted successfully.')
      setPwd("")
      setConfirmOpen(false)
    } else {
      setDelErr(res?.error || 'Failed to delete')
    }
  }

  return (
    <motion.div
      className="project-details"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Close button */}
      <button className="close-button" onClick={onClose}>
        × 
      </button>

      {/* Admin action buttons */}
      <div className="details-actions">
        <button className="btn edit" onClick={handleEdit} title="Edit this project">
          <FaEdit />
          <span className="edit-text">Edit</span>
        </button>
        <button className="btn delete " onClick={handleDelete} title="Delete this project">
          <FaTrash />
          <span>Delete</span>
        </button>
        {confirmOpen && (
          <div className="delete-confirm">
            <input
              type="password"
              placeholder="Enter admin password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
            <button className="btn danger" onClick={doConfirmDelete} disabled={deleting}>
              {deleting ? 'Deleting…' : 'Confirm'}
            </button>
            <button className="btn ghost" onClick={() => { setConfirmOpen(false); setPwd(""); }} disabled={deleting}>
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Project header */}
      <div className="project-header">
        <h3>{project.title}</h3>
        <div className="project-links">
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">
            Live Demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
            Source Code
          </a>
        </div>
      </div>

      {(delMsg || delErr) && (
        <div className={`delete-msg ${delErr ? 'error' : 'ok'}`}>
          {delErr || delMsg}
        </div>
      )}

      {/* Project image */}
      <div className="project-image">
        <img src={project.imageUrl || "/placeholder.svg"} alt={project.title} />
      </div>

      {/* Project description */}
      <div className="project-description">
        <h4>About the Project</h4>
        <div 
          className="project-description-text" 
          style={{ 
            whiteSpace: 'pre-wrap',
            lineHeight: '1.6',
            marginTop: '1rem',
            fontSize: '1.1rem',
            color: 'var(--text-color)'
          }}
        >
          {project.fullDescription}
        </div>
      </div>

      {/* Features list */}
      <div className="project-features">
        <h4>Key Features</h4>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Technologies used */}
      <div className="project-tech">
        <h4>Technologies Used</h4>
        <div className="tech-list">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetails
