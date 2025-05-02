import React from 'react';
import './Controls.css';

const Controls = ({ filter, setFilter, sortOrder, setSortOrder }) => (
  <div className="controls">
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
    <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
      <option value="Newest">Newest First</option>
      <option value="Oldest">Oldest First</option>
    </select>
  </div>
);

export default Controls;
