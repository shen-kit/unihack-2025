import { useContext, useState } from "react";
import { Button, Flex, Text } from "@mantine/core";
import styles from "../css/Sidebar.module.css";
import ClassModal from "./ClassModal";
import { PageContext } from "../contexts/PageContext";
import { IconCircleX, IconEdit } from "@tabler/icons-react";
import { UnitContext } from "../contexts/UnitContext";

function ClassCard({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = () => {
    setIsModalOpen(true);
  };
  console.log(data);
  const { getUnits } = useContext(UnitContext);
  const { edit, editUnit, setEditUnit, setUnitInfo, unitInfo } =
    useContext(PageContext);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleActiveEdit = async () => {
    if (editUnit === data._id) {
      setEditUnit(-1);
      setUnitInfo("");
    } else {
      setEditUnit(data._id);
      setUnitInfo({
        unitcode: data.unitcode,
        classType: data.name,
        duration: data.duration,
        classes: data.classes,
      });
      await getUnits();
    }
  };

  return (
    <>
      <Flex w="100%" align="center" justify="end">
        {edit && (
          <Button onClick={handleActiveEdit} variant="subtle">
            {editUnit !== data._id && <IconEdit />}
            {editUnit === data._id && <IconCircleX color="red" />}
          </Button>
        )}
        <Flex
          direction="row"
          bg="#D9D9D9"
          h="40px"
          mt="10px"
          w="75%"
          mx="5%"
          px="10px"
          justify="space-between"
          align="center"
          className={styles["unit-card"]}
          onClick={handleCardClick}
          style={{ cursor: "pointer" }}
        >
          <Text size="l">{data.name}</Text>
          <Text size="sm">{data.duration + "h"}</Text>
        </Flex>

        <ClassModal
          opened={isModalOpen}
          onClose={handleModalClose}
          data={data}
        />
      </Flex>
    </>
  );
}

export default ClassCard;
