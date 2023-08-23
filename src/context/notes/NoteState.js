import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Shan",
    class: "10A",
  };
  const [state, setState] = useState(s1);
  const update = () => {
    setTimeout(() => {
      setState({ name: "Vijay", class: "6B" });
    }, 2000);
  };
  return (
    <noteContext.Provider value={{ state, update }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
