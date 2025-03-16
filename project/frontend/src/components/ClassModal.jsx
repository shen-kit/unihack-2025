import { Modal, Text } from "@mantine/core";

function ClassModal({ opened, onClose, data }) {
  return (
    <Modal centered opened={opened} onClose={onClose} title={data.unitcode}>
      <div>
        <Text>
          <strong>Class Type:</strong> {data.name}
        </Text>
        <Text>
          <strong>Duration:</strong>{" "}
          {`${data.duration} ${data.duration > 1 ? "hours" : "hour"}`}
        </Text>

        {/* Add class times */}
      </div>
    </Modal>
  );
}

export default ClassModal;
