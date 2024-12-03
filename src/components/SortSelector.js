import React from 'react';

const SortSelector = ({ currentSort, onChange }) => (
  <div>
    <label>Sort By: </label>
    <select value={currentSort} onChange={(e) => onChange(e.target.value)}>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
  </div>
);

export default SortSelector;