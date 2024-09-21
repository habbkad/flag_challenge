import React from "react";
import "./flag.css";
import { Box, Image, Badge } from "@chakra-ui/react";

function Flag_component({ country }) {
  return (
    <Box w="300px" borderWidth="1px" overflow="hidden">
      <Image src={country.flags.png} alt={country.flags.svg} h={200} />
      <Box
        mt="6"
        pl={6}
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      >
        {country.name}
      </Box>
      <Box p="6" mb={"6"}>
        <Box display={"flex"}>
          <Box as="span" fontSize="sm" fontWeight={600}>
            Population:{" "}
          </Box>{" "}
          <Box as="span" fontSize="sm" fontStyle={"initial"}>
            {" "}
            {country.population}
          </Box>
        </Box>
        <Box display={"flex"} mt={1}>
          <Box as="span" fontSize="sm" fontWeight={600}>
            Region:{" "}
          </Box>{" "}
          <Box as="span" fontSize="sm" fontStyle={"initial"}>
            {" "}
            {country.region}
          </Box>
        </Box>
        <Box display={"flex"} mt={1}>
          <Box as="span" fontSize="sm" fontWeight={600}>
            Capital:{" "}
          </Box>{" "}
          <Box as="span" fontSize="sm" fontStyle={"initial"}>
            {" "}
            {country.capital}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Flag_component;
