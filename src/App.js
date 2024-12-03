import React, { useEffect, useState } from "react";
import { fetchData } from "./utils/api.js";
import { saveToLocalStorage, getFromLocalStorage } from "./utils/storage";
import Header from "./components/Header";
import KanbanBoard from "./components/KanbanBoard";
import Icon from "../src/icons_FEtask/3 dot menu.svg";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(
    () => getFromLocalStorage("groupBy", "status")
  );
  const [sortBy, setSortBy] = useState(
    () => getFromLocalStorage("sortBy", "priority")
  );

  useEffect(() => {
    const loadData = async () => {
      try {
        const { tickets, users } = await fetchData();
        setTickets(tickets);
        setUsers(users);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    saveToLocalStorage("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    saveToLocalStorage("sortBy", sortBy);
  }, [sortBy]);

  return (
    <div className="App">
      <Header setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <img src={Icon} alt="My SVG Icon" width="16" height="16" />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        sortBy={sortBy}
      />
    </div>
  );
};

export default App;
