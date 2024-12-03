import React from 'react';

const GroupSelector = ({ currentGroup, onChange }) => (
  <div>
    <label>Group By: </label>
    <select value={currentGroup} onChange={(e) => onChange(e.target.value)}>
      <option value="status">Status</option>
      <option value="user">User</option>
      <option value="priority">Priority</option>
    </select>
  </div>
);

export default GroupSelector;