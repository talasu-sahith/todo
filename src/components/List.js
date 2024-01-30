import { Box, Input, Text, background, filter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const List = ({ parArr, index, handledel, setInp }) => {
  const [complete, setComplete] = useState(false);

  const IsCompleted = () => {
    setComplete(!complete);
  };

  return (
    <div>
      <Card
        margin="4"
        border="solid"
        background={complete === true ? "green" : "white"}
      >
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
          <MdDeleteForever
            size="35px"
            color="red"
            onClick={() => handledel(parArr.id)}
          />

          {/* <FaRegCheckCircle onClick={() => IsCompleted(parArr.id)} /> */}

          {complete === false ? (
            <FaRegCheckCircle onClick={() => IsCompleted()} size="35px" />
          ) : (
            <FaCircleCheck size="35px" onClick={() => IsCompleted()} />
          )}
          {/* <Button
                colorScheme="red"
                margin="2"
                fontSize="22"
                onClick={() => handledel(parArr.id)}
              >
                Delete
              </Button> */}
        </Flex>
      </Card>
    </div>
  );
};
export default List;
