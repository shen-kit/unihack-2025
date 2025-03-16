import { Flex } from "@mantine/core";
import Sidebar from "../components/Sidebar";
import Timetable from "../components/Timetable";
import { useContext, useEffect } from "react";
import { PageContext } from "../contexts/PageContext";

function HomePage() {
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    setPage("home");
  });
  return (
    <>
      <Flex direction="row" justify="center">
        <Sidebar />
        <Flex flex={1} justify="center">
          <Timetable />
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;
