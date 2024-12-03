import React from "react";
import "../styles/TicketCard.css";
import todoIcon from "../icons_FEtask/To-do.svg";
import backlogIcon from "../icons_FEtask/Backlog.svg";
import inProgressIcon from "../icons_FEtask/in-progress.svg";
import doneIcon from "../icons_FEtask/Done.svg";
import highPriorityIcon from "../icons_FEtask/Img - High Priority.svg";
import mediumPriorityIcon from "../icons_FEtask/Img - Medium Priority.svg";
import lowPriorityIcon from "../icons_FEtask/Img - Low Priority.svg";
import urgentPriorityIcon from "../icons_FEtask/SVG - Urgent Priority grey.svg";
import noPriorityIcon from "../icons_FEtask/No-priority.svg";

const statusIcons = {
  Todo: todoIcon,
  Backlog: backlogIcon,
  "In Progress": inProgressIcon,
  Done: doneIcon,
};

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

const getPriorityClass = (priority) => {
  switch (priority) {
    case 4:
      return "urgent";
    case 3:
      return "high";
    case 2:
      return "medium";
    case 1:
      return "low";
    default:
      return "no-priority";
  }
};

const Ticket = ({ ticket, users }) => {
  // Find the assigned user using userId
  const assignedUser = users?.find(user => user.id === ticket.userId);
  console.log("assignedUser", assignedUser)
  console.log("ticket", ticket)

  return (
    <div className="ticket">
      <h3 className="ticket-title">{ticket.title}</h3>
      <div className="ticket-info">
        <div className="ticket-section">
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
        <div className="ticket-section">
          <span className="label">Priority:</span>
          <span className={`priority ${getPriorityClass(ticket.priority)}`}>
            <img
              src={priorityIcons[ticket.priority] || noPriorityIcon}
              alt={getPriorityLabel(ticket.priority)}
              className="priority-icon"
            />
            {getPriorityLabel(ticket.priority)}
          </span>
        </div>
        <div className="ticket-section assigned-user">
          <span className="label">Assigned User:</span>
          <div className="user-info">
            {assignedUser ? (
              <>
                <span className="assigned-user-name">{assignedUser.name}</span>
              </>
            ) : (
              <span>No User Assigned</span> // Handle case if user not found
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
