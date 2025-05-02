import React from 'react';
import './IncidentList.css';

const IncidentList = ({ incidents, expanded, toggleExpand }) => (
  <div>
    {incidents.map((incident) => (
      <div key={incident.id} className="card">
        <h3>{incident.title}</h3>
        <p>
          Severity: {incident.severity} | Date:{' '}
          {new Date(incident.reported_at).toLocaleDateString()}
        </p>
        <button onClick={() => toggleExpand(incident.id)}>
          {expanded.has(incident.id) ? 'Hide Details' : 'View Details'}
        </button>
        {expanded.has(incident.id) && (
          <div className="details">{incident.description}</div>
        )}
      </div>
    ))}
  </div>
);

export default IncidentList;
