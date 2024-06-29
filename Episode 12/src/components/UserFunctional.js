import { useState } from "react";

const UserFunctional = (props) => {
  const [count] = useState(0);
  const [count2] = useState(0);
  return (
    <div className="functionContainer">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>{props.name}</h2>
    </div>
  );
};

export default UserFunctional;
