import {
  Box,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import "./EventCard.css";
import React from "react";
export default function EventCard(props) {
  return (
    <Box p={4} width="350px">
      <Box
        borderWidth={1}
        borderRadius="md"
        minHeight={"400px"}
        overflow="hidden"
        backgroundColor={"blackAlpha.400"}
      >
        <Image
          src={props.image}
          alt="Image"
          objectFit="cover"
          w="100%"
          h={200}
        />

        <Box p={4}>
          <Text fontSize="20px" fontWeight="bold" height={"50px"} mb={2}>
            {props.title}
          </Text>

          <Accordion allowToggle>
            <AccordionItem border={0}>
              <h2>
                <AccordionButton
                  display="flex"
                  justifyContent={"space-between"}
                  w={"100%"}
                  alignItems={"flex-start"}
                  margin={0}
                  padding={"10px 10px 10px 0px"}
                >
                  <Box flex="1" textAlign="left">
                    More Details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                className="event-registration-description"
                // overflowY={"scroll"}
                // maxHeight={"100px"}
                pb={4}
              >
                {props.description}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Flex width={"100%"} justify="flex-end" mt={4}>
            <Button width={"100%"} backgroundColor="#54cadd" color={"black"}>
              Register
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
