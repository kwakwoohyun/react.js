import { useState } from "react";
import "./App.css";
import AddNumberRoot from "./withReduxComponents copy/AddNumberRoot";
import DisplayNumberRoot from "./withReduxComponents copy/DisplayNumberRoot";

function AppRedux() {
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

export default AppRedux;
