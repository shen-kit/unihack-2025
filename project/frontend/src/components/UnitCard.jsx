import { Flex, Text } from "@mantine/core";
import styles from "../css/Sidebar.module.css";

function UnitCard({ data, color, onClick }) {
  return (
    <>
      <Flex
        direction="column"
        bg={color}
        h="3rem"
        w="90%"
        style={{ cursor: "pointer" }}
        justify="center"
        align="center"
        onClick={onClick}
        className={styles["unit-card"]}
      >
        <Text size="lg" fw={600}>
          {data.unitcode}
        </Text>
        <Text size="md">{data.name}</Text>
      </Flex>
    </>
  );
}

export default UnitCard;
