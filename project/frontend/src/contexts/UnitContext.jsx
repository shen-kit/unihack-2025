import { createContext, useState } from "react";
import { getAllClasses } from "../utility/fetchClasses";

// Create UnitContext
export const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [units, setUnits] = useState([]);
  async function getUnits() {
    try {
      const data = await getAllClasses(10000000, 2025, 1);
      setUnits(data);
    } catch (err) {
      console.log("error");
    }
  }

  return (
    <UnitContext.Provider value={{ units, getUnits }}>
      {children}
    </UnitContext.Provider>
  );
};
