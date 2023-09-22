import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [userId, setUserId] = useState();
  console.log(userId);
  const state = {
    userId,
    setUserId,
  };
  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default ContextProvider;
