import { Button, Flex, ScrollArea } from "@mantine/core";
import Unit from "./Unit";
import { IconSparkles } from "@tabler/icons-react";
import { useContext, useEffect } from "react";
import { PageContext } from "../contexts/PageContext";
import PlannerFeatures from "./PlannerFeatures";
import { UnitContext } from "../contexts/UnitContext";
import { getAllClasses } from "../utility/fetchClasses";

const units = [
  {
    unitCode: "FIT3171",
    unitName: "Databases",
    classes: [
      { cl_id: 123, classType: "Seminar", classDuration: "1hr" },
      { cl_id: 124, classType: "Applied", classDuration: "2hr" },
    ],
  },
  {
    unitCode: "FIT2099",
    unitName: "Java OOP",
    classes: [
      { cl_id: 125, classType: "Lecture", classDuration: "1.5hr" },
      { cl_id: 126, classType: "Workshop", classDuration: "2hr" },
    ],
  },
  {
    unitCode: "FIT3159",
    unitName: "Computer Architecture",
    classes: [
      { cl_id: 127, classType: "Lab", classDuration: "3hr" },
      { cl_id: 128, classType: "Tutorial", classDuration: "1hr" },
    ],
  },
  {
    unitCode: "FIT1051",
    unitName: "AI & ML",
    classes: [
      { cl_id: 129, classType: "Lecture", classDuration: "2hr" },
      { cl_id: 130, classType: "Practical", classDuration: "1.5hr" },
    ],
  },
];

const colors = ["#D6E5F3", "#DBE9D4", "#F8E3F7", "#FFFCCC"]; // Light blue, green, yellow, red

function Sidebar() {
  const { edit } = useContext(PageContext);
  const { units, getUnits } = useContext(UnitContext);

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
      </ScrollArea>
    </Flex>
  );
}

export default Sidebar;
