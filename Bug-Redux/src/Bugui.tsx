import React, { useState } from "react";
import store from "./Store";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Store";
import { Bug } from "./Bugreducerui";

const Bugui: React.FC = () => {
  const bugs = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [desc, setDesc] = useState("");

  // same logic as you had in your code
  const addBug = (description: string) => {
    dispatch({
      type: "bugadded",
      payload: {
        description: description,
      },
    });
  };

  const resolveBug = (id: number) => {
    dispatch({
      type: "bugresolve",
      payload: {
        id: id,
      },
    });
  };

  const deleteBug = (id: number) => {
    dispatch({
      type: "bugadded", // as in your original code (even if it's misused here)
      payload: {
        id: id,
      },
    });
  };

  return (
    <div>
      <h1>Bug Tracker</h1>
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter bug description"
      />
      <button onClick={() => addBug(desc)}>Add Bug</button>

      <ul>
        {bugs.map((bug: Bug) => (
          <li key={bug.id}>
            {bug.description} -{" "}
            {bug.resolved ? "Resolved" : "Unresolved"}
            <button onClick={() => resolveBug(bug.id)}>Resolve</button>
            <button onClick={() => deleteBug(bug.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bugui;
