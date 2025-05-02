import React, { useState } from 'react';
import './IncidentForm.css';

const IncidentForm = ({ addIncident }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Low');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!description.trim()) newErrors.description = 'Description is required.';
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    addIncident({ title, description, severity });
    setTitle('');
    setDescription('');
    setSeverity('Low');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="incident-form">
      <h2>Report New Incident</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <div className="error">{errors.title}</div>}
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && <div className="error">{errors.description}</div>}
      <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Submit Incident</button>
    </form>
  );
};

export default IncidentForm;
