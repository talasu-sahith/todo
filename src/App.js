import "./App.css";
import { Box, Input, Text, background, filter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import List from "./components/List";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

function App() {
  const [inp, setInp] = useState("");

  const [varArr, setVarArr] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    setVarArr([...varArr, { task: inp, id: nanoid(), check: false }]);
    setInp("");
    console.log(varArr);
  };
  const handledel = (id) => {
    setVarArr(varArr.filter((k) => k.id !== id));
    console.log(varArr);
  };

  // const IsCompleted = (id) => {
  //   setVarArr([
  //     varArr.map((array) => {
  //       array.id === id
  //         ? { check: true, id: array.id, task: array.task }
  //         : { check: array.check, id: array.id, task: array.task };
  //     }),
  //   ]);
  //   setInp("");
  // };

  return (
    <div>
      <h1>React</h1>
      <Container>
        <Heading textAlign="center">Todo</Heading>
        <form onSubmit={handleAdd}>
          <Flex gap="6" align="center">
            <Box>
              <Input
                value={inp}
                variant="flushed"
                placeholder="Enter task"
                onChange={(e) => {
                  setInp(e.target.value);
                }}
              />
            </Box>
            <Box>
              <Button
                colorScheme="teal"
                variant="link"
                paddingTop="2"
                fontSize="22"
                type="submit"
              >
                Add
              </Button>
            </Box>
          </Flex>
        </form>
        {varArr.map((parArr, index) => (
          <List
            parArr={parArr}
            key={index}
            handledel={handledel}
            setInp={setInp}
          />
          // <Card
          //   key={index}
          //   margin="4"
          //   border="solid"
          //   background={parArr.check === true ? "green" : "white"}
          // >
          //   <Flex>
          //     <CardBody>
          //       <Text type="hidden">{parArr.task}</Text>
          //     </CardBody>
          //     <Button
          //       colorScheme="red"
          //       margin="2"
          //       fontSize="22"
          //       onClick={() => {
          //         handledel(parArr.id);
          //         setInp(parArr.task);
          //       }}
          //     >
          //       Edit
          //     </Button>
          //     <MdDeleteForever
          //       size="35px"
          //       color="red"
          //       onClick={() => handledel(parArr.id)}
          //     />

          //     {/* <FaRegCheckCircle onClick={() => IsCompleted(parArr.id)} /> */}

          //     {parArr.check === false ? (
          //       <FaRegCheckCircle
          //         onClick={() => IsCompleted(parArr.id)}
          //         size="35px"
          //       />
          //     ) : (
          //       <FaCircleCheck size="35px" />
          //     )}
          //     {/* <Button
          //       colorScheme="red"
          //       margin="2"
          //       fontSize="22"
          //       onClick={() => handledel(parArr.id)}
          //     >
          //       Delete
          //     </Button> */}
          //   </Flex>
          // </Card>
        ))}
      </Container>
    </div>
  );
}

export default App;
