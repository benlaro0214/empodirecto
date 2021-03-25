import React, { useEffect, useState } from "react";
import paraMtr from "./utils/paramMtr/paramMtr";
import Table from "./components/tables/Table";
import { getUsers } from "./utils/api/API";

import './App.css';

function App() {
  const [seekUsers, updateTheUsers] = useState([]);
  const [usersToRender, upDateUserRendering] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateTheUsers(results));
  }, []);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>
        To filter by first name, please begin your search in the user input
        below
      </p>
      <paraMtr users={seekUsers} updateUsers={upDateUserRendering} />
      <Table users={usersToRender} />
    </div>
  );
}

export default App;

