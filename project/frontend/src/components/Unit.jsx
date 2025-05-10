import { Flex, Transition } from "@mantine/core";
import UnitCard from "./UnitCard";
import ClassCard from "./ClassCard";
import { useState } from "react";

function Unit({ data, color }) {
  const [visible, setVisible] = useState(true);
  console.log(data);

  return (
    <Flex direction="column" w="100%" align="center" my="15px">
      <UnitCard
        data={data}
        color={color}
        onClick={() => setVisible((v) => !v)}
      />
      <Transition
        mounted={visible}
        transition={{
          in: { opacity: 1, transform: "translateY(0)" },
          out: { opacity: 0, transform: "translateY(-10px)" },
        }}
        duration={200}
        timingFunction="ease-in-out"
      >
        {(transitionStyles) => (
          <Flex
            direction="column"
            align="end"
            w="100%"
            style={transitionStyles}
          >
            {data.classTypes.map((c) => {
              return (
                <ClassCard
                  key={c._id}
                  data={{ ...c, unitcode: data.unitcode }}
                />
              );
            })}
          </Flex>
        )}
      </Transition>
    </Flex>
  );
}

export default Unit;
