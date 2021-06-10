import React from "react";

import "./App.css";
import { UserInputs } from "./components/UserInputs";
import { UserLists } from "./components/UserLists";

function App() {
  console.log("App rendered!");
  return (
    <div className="App">
      <UserInputs />
      <UserLists />
    </div>
  );
}

export default App;
