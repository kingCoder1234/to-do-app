import React from 'react';

const PrioritySelector = ({ currentPriority, onChange }) => {
  return (
    <div className="priority-selector">
      <label htmlFor="priority">Filter by Priority:</label>
      <select
        id="priority"
        value={currentPriority}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="4">Urgent</option>
        <option value="3">High</option>
        <option value="2">Medium</option>
        <option value="1">Low</option>
        <option value="0">No Priority</option>
      </select>
    </div>
  );
};

export default PrioritySelector;
