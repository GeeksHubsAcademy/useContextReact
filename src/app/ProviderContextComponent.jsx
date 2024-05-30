import { useState } from "react";
import { myContext } from "./context";

export const MyProvider = ({ children }) => {
  const [estado, setEstado] = useState({
    auth: {
      token: "",
      name: "",
    },
    search_criteria: "Aliens",
  });

  const SetAuth = (target, payload) => {
    setEstado((prevState) => ({
      ...prevState,
      auth: {
        ...estado.auth,
        [target]: payload,
      },
    }));
  };

  return (
    <myContext.Provider value={{ estado, SetAuth }}>
      {children}
    </myContext.Provider>
  );
};
