import React, { useState } from 'react';
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentList';
import Controls from './components/Controls';
import './App.css';


const initialData = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics...",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "LLM provided incorrect safety procedure information...",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z",
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata...",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z",
  },
];

function App() {
  const [incidents, setIncidents] = useState(initialData);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const [expanded, setExpanded] = useState(new Set());

  const addIncident = (incident) => {
    setIncidents([{
      ...incident,
      id: Date.now(),
      reported_at: new Date().toISOString(),
    }, ...incidents]);
  };

  const toggleExpand = (id) => {
    const newExpanded = new Set(expanded);
    newExpanded.has(id) ? newExpanded.delete(id) : newExpanded.add(id);
    setExpanded(newExpanded);
  };

  const filtered = incidents.filter(
    (i) => filter === 'All' || i.severity === filter
  ).sort((a, b) =>
    sortOrder === 'Newest'
      ? new Date(b.reported_at) - new Date(a.reported_at)
      : new Date(a.reported_at) - new Date(b.reported_at)
  );

  return (
    <div className="container">
      <h1>AI Safety Incident Dashboard</h1>
      <Controls
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <IncidentList
        incidents={filtered}
        expanded={expanded}
        toggleExpand={toggleExpand}
      />
      <IncidentForm addIncident={addIncident} />
    </div>
  );
}

export default App;
