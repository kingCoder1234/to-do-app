import React from "react";
import Ticket from "./Ticket";
import "../styles/KanbanBoard.css";
import statusIcon from "../icons_FEtask/status-svgrepo-com.svg";
import userIcon from "../icons_FEtask/user-svgrepo-com.svg";
import priorityIcon from "../icons_FEtask/SVG - Urgent Priority grey.svg";

const KanbanBoard = ({ tickets, users, groupBy, sortBy }) => {
  console.log("users", users)
  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedTickets = sortTickets(groupedTickets, sortBy);

  const getGroupIcon = (group) => {
    switch (groupBy) {
      case "status":
        return statusIcon;
      case "user":
        return userIcon;
      case "priority":
        return priorityIcon;
      default:
        return statusIcon;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(sortedTickets).map((group, index) => (
        <div key={index} className="kanban-column">
          <div className="kanban-column-header">
            <img
              src={getGroupIcon(group)}
              alt={group}
              className="kanban-column-icon"
            />
            <h2>{group}</h2>
          </div>
          {sortedTickets[group].map((ticket) => (
            <>
            <Ticket key={ticket.id} ticket={ticket} users = {users} />
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

// Group tickets based on the selected option
const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((groups, ticket) => {
    const groupKey = getGroupKey(ticket, groupBy);
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(ticket);
    return groups;
  }, {});
};

// Determine the group key based on the groupBy option
const getGroupKey = (ticket, groupBy) => {
  if (groupBy === "status") return ticket.status;
  if (groupBy === "user") return "Users";
  if (groupBy === "priority") return ticket.priority;
  return ticket.status; // Default grouping
};

// Sort tickets based on the selected option
const sortTickets = (groupedTickets, sortBy) => {
  for (const group in groupedTickets) {
    groupedTickets[group].sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority;
      } else if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  }
  return groupedTickets;
};

export default KanbanBoard;
