import React from "react";
import Child from "./Child";

function Parent(props) {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child name={props.name} />
    </div>
  );
}

export default Parent;
