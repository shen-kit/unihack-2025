import { createContext, useContext, useState } from "react";

// Create FilterContext
export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [hours, setHours] = useState(4);
  const [clickedCells, setClickedCells] = useState({});
  const [preferenceClasses, setPreferenceClasses] = useState([])
  const [clearCount, setClearCount] = useState(0)


  return (
    <FilterContext.Provider
      value={{ hours, setHours, clickedCells, setClickedCells, preferenceClasses, setPreferenceClasses, clearCount, setClearCount }}
    >
      {children}
    </FilterContext.Provider>
  );
};
