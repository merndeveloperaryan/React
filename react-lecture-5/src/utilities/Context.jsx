import { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (props) => {
  const [users, setFunction] = useState([
    {
      id: 0,
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 1,
      name: "Jane Doe",
      email: "jane@example.com",
    },
    {
      id: 2,
      name: "Alice Doe",
      email: "alice@example.com",
    },
  ]);

  

  return (
    <UserContext.Provider value={{ users }}>
      {props.children}
    </UserContext.Provider>
  )
};

export default Context;
