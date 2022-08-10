import { useState } from "react";
import "./App.css";
import AddNumberRoot from "./withOutReduxComponents/AddNumberRoot";
import DisplayNumberRoot from "./withOutReduxComponents/DisplayNumberRoot";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>Root</h1>
      <AddNumberRoot
        onClick={function (size) {
          setNumber(number + Number(size));
        }}
      />
      <DisplayNumberRoot number={number} />
    </div>
  );
}

export default App;
