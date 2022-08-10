function DisplayNumber(props) {
  return (
    <div>
      <h1>Display Number</h1>
      <input
        type="text"
        readOnly
        value={props.number}
        // defaultValue={props.number}
      ></input>
    </div>
  );
}

export default DisplayNumber;
