import React from "react";
import "../styles/TicketCard.css";

// Import icons for status and priority
import todoIcon from "../icons_FEtask/To-do.svg";
import backlogIcon from "../icons_FEtask/Backlog.svg";
import inProgressIcon from "../icons_FEtask/in-progress.svg";
import doneIcon from "../icons_FEtask/Done.svg";
import highPriorityIcon from "../icons_FEtask/Img - High Priority.svg";
import mediumPriorityIcon from "../icons_FEtask/Img - Medium Priority.svg";
import lowPriorityIcon from "../icons_FEtask/Img - Low Priority.svg";
import urgentPriorityIcon from "../icons_FEtask/SVG - Urgent Priority grey.svg";
import noPriorityIcon from "../icons_FEtask/No-priority.svg";

// Map for status icons
const statusIcons = {
  Todo: todoIcon,
  Backlog: backlogIcon,
  "In Progress": inProgressIcon,
  Done: doneIcon,
};

// Map for priority icons
const priorityIcons = {
  4: urgentPriorityIcon,
  3: highPriorityIcon,
  2: mediumPriorityIcon,
  1: lowPriorityIcon,
  0: noPriorityIcon,
};

const getPriorityLabel = (priority) => {
  switch (priority) {
    case 4:
      return "Urgent";
    case 3:
      return "High";
    case 2:
      return "Medium";
    case 1:
      return "Low";
    default:
      return "No Priority";
  }
};

const TicketCard = ({ ticket, user }) => (
  <div className="ticket-card">
    <h4>{ticket.title}</h4>

    {/* Priority with Icon */}
    <div className="ticket-card-section">
      <span className="label">Priority:</span>
      <span className="priority">
        <img
          src={priorityIcons[ticket.priority] || noPriorityIcon}
          alt={getPriorityLabel(ticket.priority)}
          className="priority-icon"
        />
        {getPriorityLabel(ticket.priority)}
      </span>
    </div>

    {/* User with Icon */}
    <div className="ticket-card-section">
      <span className="label">User:</span>
      <span className="user">
        {user ? (
          <>
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            {user.name}
          </>
        ) : (
          "No User Assigned"
        )}
      </span>
    </div>

    {/* Status with Icon */}
    <div className="ticket-card-section">
      <span className="label">Status:</span>
      <span className="status">
        <img
          src={statusIcons[ticket.status] || noPriorityIcon}
          alt={ticket.status}
          className="status-icon"
        />
        {ticket.status}
      </span>
    </div>
  </div>
);

export default TicketCard;
