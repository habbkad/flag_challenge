import React, { useEffect, useState } from "react";
import "./flags.css";
import Flag_component from "../flag_component/flag_component";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BiPhoneIncoming, BiSearch } from "react-icons/bi";
import axios from "axios";
import List from "../List/list";

function Flags() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getData = async () => {
      try {
        await axios
          .get("data.json")
          .then((res) => setCountries(res.data))
          .catch((err) => console.log(console.log(err)));
      } catch (error) {
        console.log(error);
      }
      let newCountries = [];

      if (region == "") {
        try {
          await axios
            .get("data.json")
            .then((res) => setCountries(res.data))
            .catch((err) => console.log(console.log(err)));
        } catch (error) {
          console.log(error);
        }
      } else {
        countries.map((item) => {
          if (item.region == region) {
            newCountries.push(item);
          }
          console.log(countries);

          setCountries(newCountries);
        });
      }
    };
    const finRegion = () => {};

    getData();
    finRegion();
  }, [region]);

  const searchCountry = () => {
    let search = countries.map((item) => {
      if (item.name.include(search)) {
        return item;
      }
    });
    setCountries(search);
  };

  return (
    <Box mt={10} px={"5%"}>
      <Box
        display={"flex"}
        flexDir={["column", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={10}
      >
        <InputGroup>
          <InputLeftElement pointerEvents="none" mt={2} value={search}>
            <BiSearch size={20} />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="search for a country ..."
            w={[300, 450]}
            h={53}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </InputGroup>

        <Select
          placeholder="Filter by Region"
          w={200}
          h={53}
          mt={[4, "null"]}
          onChange={(e) => {
            setRegion(e.target.value);
          }}
        >
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="">All</option>
        </Select>
      </Box>
      <List countries={countries} search={search} />
    </Box>
  );
}

export default Flags;
