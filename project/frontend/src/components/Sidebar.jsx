import { Button, Flex, ScrollArea } from "@mantine/core";
import Unit from "./Unit";
import { IconSparkles } from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { PageContext } from "../contexts/PageContext";
import PlannerFeatures from "./PlannerFeatures";
import { UnitContext } from "../contexts/UnitContext";
import { getAllClasses } from "../utility/fetchClasses";
import { FilterContext } from "../contexts/FilterContext";

const colors = ["#D6E5F3", "#DBE9D4", "#F8E3F7", "#FFFCCC"]; // Light blue, green, yellow, red

function Sidebar() {
  const { edit } = useContext(PageContext);
  const { units, getUnits } = useContext(UnitContext);
  const { setClearCount } = useContext(FilterContext)

  const handleClearClick = () => {
    setClearCount(prev => prev + 1)
  }

  useEffect(() => {
    async function getU() {
      await getUnits();
    }
    getU();
  }, []);

  return (
    <Flex
      direction="column"
      align="center"
      w="25%"
      bg="#F5F5F5"
      h="100vh"
      py="20px"
    >
      <ScrollArea w="100%">
        {edit && <PlannerFeatures />}
        {units.map((unit, index) => {
          return <Unit key={index} data={unit} color={colors[index]} />;
        })}
        {edit &&
          <Flex justify="center" w="100%" py="20px">
            <Button variant="filled" bg="red" w="90%" onClick={handleClearClick}>
              Clear Timetable
            </Button>
          </Flex>
        }
      </ScrollArea>
    </Flex>
  );
}

export default Sidebar;
