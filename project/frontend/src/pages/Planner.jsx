import { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { PageContext } from "../contexts/PageContext";

function Planner() {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("planner");
  });
  return (
    <>
      <Sidebar />
    </>
  );
}

export default Planner;
