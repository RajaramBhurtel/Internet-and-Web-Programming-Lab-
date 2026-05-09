import React from "react";

function GrandChild(props) {
  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>Student Name: {props.name}</p>
    </div>
  );
}

export default GrandChild;
