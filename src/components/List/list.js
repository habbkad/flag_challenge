import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Flag_component from "../flag_component/flag_component";

function List({ countries, search }) {
  const filteredData = countries.filter((el) => {
    //if no input the return the original
    if (search === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().startsWith(search);
    }
  });
  console.log(filteredData);
  return (
    <Box
      display={"flex"}
      flexDir={["column"]}
      justifyContent={["center"]}
      w={["100%"]}
    >
      {filteredData ? (
        <SimpleGrid columns={[1, 2, 4]} spacing="40px">
          {filteredData.map((item) => {
            return <Flag_component country={item} />;
          })}
        </SimpleGrid>
      ) : (
        <Text>Loading ...</Text>
      )}
    </Box>
  );
}

export default List;
