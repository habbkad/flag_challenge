import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { IoMoonSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      w={"100%"}
      display={"flex"}
      backgroundColor={colorMode === "dark" ? "" : "#fff8f7"}
      justifyContent={" space-between"}
      h={"70px"}
      px={"5%"}
      alignItems={"center"}
    >
      <Box>
        <Text fontSize="2xl">Where in the world?</Text>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Box onClick={toggleColorMode}>
          {colorMode === "dark" ? (
            <IoMoonSharp size={18} />
          ) : (
            <MdOutlineLightMode size={20} />
          )}
        </Box>
        <Text fontSize={"sm"} ml={2}>
          {colorMode === "dark" ? (
            <Text fontSize={"md"}>Dark</Text>
          ) : (
            <Text fontSize={"md"}>Light</Text>
          )}
        </Text>
      </Box>
    </Box>
  );
}

export default Navbar;
