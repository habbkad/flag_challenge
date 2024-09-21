import logo from "./logo.svg";
import "./App.css";
import Flag_component from "./components/flag_component/flag_component";
import Navbar from "./components/navbar/navbar";
import Flags from "./components/flags/flags";
import { Center } from "@chakra-ui/react";

function App() {
  return (
    <div className="">
      <Navbar />
      <Center>
        <Flags />
      </Center>
    </div>
  );
}

export default App;
