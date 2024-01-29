import "./App.css";
import { Box, Input, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import List from "./components/List";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { nanoid } from "nanoid";

function App() {
  const [inp, setInp] = useState("");

  const [varArr, setVarArr] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    setVarArr([...varArr, { task: inp, id: nanoid() }]);
    setInp("");
  };
  const handledel = (id) => {
    setVarArr(varArr.filter((k) => k.id !== id));
    console.log(varArr);
  };

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
          <Card key={index} margin="4" border="solid">
            <Flex>
              <CardBody>
                <Text type="hidden">{parArr.task}</Text>
              </CardBody>
              <Button
                colorScheme="red"
                margin="2"
                fontSize="22"
                onClick={() => {
                  handledel(parArr.id);
                  setInp(parArr.task);
                }}
              >
                Edit
              </Button>
              <Button
                colorScheme="red"
                margin="2"
                fontSize="22"
                onClick={() => handledel(parArr.id)}
              >
                Delete
              </Button>
            </Flex>
          </Card>
        ))}
      </Container>
      <List />
    </div>
  );
}

export default App;
