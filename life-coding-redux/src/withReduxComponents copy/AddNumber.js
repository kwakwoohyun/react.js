import { useState } from "react";
import store from "../store";

function AddNumber() {
  const [size, setSize] = useState(0);

  return (
    <div>
      <h1>Add Number</h1>
      <input
        type="button"
        value="+"
        onClick={function () {
          store.dispatch({
            type: "INCREMENT",
            size: Number(size),
          });
        }}
      ></input>
      <input
        type="text"
        value={size}
        onChange={function (e) {
          setSize(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default AddNumber;
