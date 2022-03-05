import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [showCalc, setShowCalc] = useState(false);

  const closeCalc = () => {
    setShowCalc(false);
  };
  const openCalc = () => {
    setShowCalc(true);
  };

  return (
    <AppContext.Provider value={{ showCalc, openCalc, closeCalc }}>
      {children}
    </AppContext.Provider>
  );
};
