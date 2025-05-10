import { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("home");
  const [edit, setEdit] = useState(false);
  const [editUnit, setEditUnit] = useState(false);
  const [unitInfo, setUnitInfo] = useState("");

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        edit,
        setEdit,
        editUnit,
        setEditUnit,
        unitInfo,
        setUnitInfo,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
