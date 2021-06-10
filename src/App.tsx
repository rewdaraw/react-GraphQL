import React from "react";

import "./App.css";
import { UserInputs } from "./components/UserInputs";

function App() {
  console.log("App rendered!");
  return (
    <div className="App">
      <UserInputs />
    </div>
  );
}

export default App;
