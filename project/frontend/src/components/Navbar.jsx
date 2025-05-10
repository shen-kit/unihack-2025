import { useContext, useState } from "react";
import { Text, Button, Menu, Flex, ActionIcon, Image } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate and useLocation
import { IconHelpCircle, IconChevronDown } from "@tabler/icons-react";
import { PageContext } from "../contexts/PageContext";
import AllocateLogo from "../assets/allocate_logo.svg";

function Navbar() {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");
  const [modeText, setModeText] = useState("UPDATE PREFERENCES");
  const { setEdit, setEditUnit } = useContext(PageContext);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const handleEdit = () => {
    setEditUnit(-1);
    setEdit((e) => {
      setModeText(e ? "UPDATE PREFERENCES" : "SAVE CHANGES");
      return !e;
    });
  };

  // Handle Logout (Navigate to Login Page)
  const handleLogout = () => {
    navigate("/login"); // Redirects to the login page
  };

  // Define routes where the Navbar should be hidden
  const hiddenRoutes = ["/login", "/forgotpassword"];

  if (hiddenRoutes.includes(location.pathname)) {
    return null; // Do not render Navbar on these pages
  }

  return (
    <Flex
      h={50}
      px="md"
      bg="blue.9"
      c="white"
      align="center"
      justify="space-between"
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Button
        variant="transparent"
        color="white"
        size="lg"
        weight={500}
        onClick={() => navigate("/")}
      >
        <Image src={AllocateLogo} h="150%" alt="Allocate++" />
      </Button>

      {/* Navbar Right Section */}
      <Flex gap="md" align="center">
        <Button color="#ebebeb" onClick={handleEdit}>
          <font color="black">{modeText}</font>
        </Button>

        {/* Semester Selection Dropdown */}
        <Menu>
          <Menu.Target>
            <Button
              variant="subtle"
              color="gray.0"
              rightSection={<IconChevronDown size={14} />}
            >
              {selectedSemester}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item onClick={() => setSelectedSemester("Semester 1")}>
              Semester 1
            </Menu.Item>
            <Menu.Item onClick={() => setSelectedSemester("Semester 2")} disabled>
              Semester 2
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>

        {/* Help and Settings Icons */}
        <ActionIcon
          variant="subtle"
          color="gray.0"
          size="lg"
          onClick={() => navigate("/help")}
        >
          <IconHelpCircle size={20} />
        </ActionIcon>

        {/* Logout Button */}
        <Button variant="subtle" color="gray.0" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
