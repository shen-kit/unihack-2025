import { createContext, useContext, useState } from "react";

// Create FilterContext
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [hours, setHours] = useState(4);
  const [clickedCells, setClickedCells] = useState({});
  return (
    <FilterContext.Provider
      value={{ hours, setHours, clickedCells, setClickedCells }}
    >
      {children}
    </FilterContext.Provider>
  );
};
