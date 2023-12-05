import {
  Container,
  Text,
  Card,
  Stack,
  HStack,
  VStack,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import CommitteeMembers from "./CommitteeMembers";
import CoreTeam from "./ChiefPatrons";
import ChiefPatrons from "./ChiefPatrons";
import Patrons from "./Patrons";
import CoPatrons from "./CoPatrons";
import Conveners from "./Coveners";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Committee() {
  const navigate = useNavigate();
  return (
    <>
      <div className="photo-gallery-parent-container">
        <div className="photo-gallery-navbar">
          <div
            className="photo-gallery-back-button"
            onClick={() => navigate(`/`)}
          >
            <IoIosArrowBack />
            Back
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            fontSize: "40px",
            fontWeight: "800",
            color: "white",
            paddingBottom: "10px",
            marginBottom: "10px",
            backgroundColor: "rgba(0, 0, 0, 0.442)",
          }}
        >
          Organizing Committee
        </div>
        <Container
          background={"transparent"}
          className="committee-section"
          padding={5}
          maxW={"100%"}
        >
          <Card
            background={"transparent"}
            padding={0}
            align="flex-start"
            // bg="white"
          >
            <Container
              padding={0}
              marginTop={10}
              maxW={{
                base: "100%",
                md: "100%",
                lg: "100%",
                xl: "80%",
                "2xl": "60%",
              }}
            >
              <Card
                backgroundColor={"rgba(0, 0, 0, 0.442)"}
                maxW={"100%"}
                padding={0}
              >
                <Heading
                  padding={5}
                  textAlign={"center"}
                  size="sm"
                  color="white"
                  bg="#161d37 !important"
                  border="1px solid white"
                >
                  Chief Patrons
                </Heading>
                <ChiefPatrons />
              </Card>
            </Container>
            <Container
              padding={0}
              marginTop={10}
              maxW={{
                base: "100%",
                md: "100%",
                lg: "100%",
                xl: "80%",
                "2xl": "60%",
              }}
            >
              <Card
                backgroundColor={"rgba(0, 0, 0, 0.442)"}
                maxW={"100%"}
                padding={0}
              >
                <Heading
                  padding={5}
                  textAlign={"center"}
                  size="sm"
                  color="white"
                  bg="#161d37 !important"
                  border="1px solid white"
                >
                  Patrons
                </Heading>
                <Patrons />
              </Card>
            </Container>
            <Container
              padding={0}
              marginTop={10}
              maxW={{
                base: "100%",
                md: "100%",
                lg: "100%",
                xl: "80%",
                "2xl": "60%",
              }}
            >
              <Card
                backgroundColor={"rgba(0, 0, 0, 0.442)"}
                maxW={"100%"}
                padding={0}
              >
                <Heading
                  padding={5}
                  textAlign={"center"}
                  size="sm"
                  color="white"
                  bg="#161d37 !important"
                  border="1px solid white"
                >
                  Co-Patrons
                </Heading>
                <CoPatrons />
              </Card>
            </Container>
            <Container
              padding={0}
              marginTop={10}
              maxW={{
                base: "100%",
                md: "100%",
                lg: "100%",
                xl: "80%",
                "2xl": "60%",
              }}
            >
              <Card
                backgroundColor={"rgba(0, 0, 0, 0.442)"}
                maxW={"100%"}
                padding={0}
              >
                <Heading
                  padding={5}
                  textAlign={"center"}
                  size="sm"
                  color="white"
                  bg="#161d37 !important"
                  border="1px solid white"
                >
                  Conveners
                </Heading>
                <Conveners />
              </Card>
            </Container>
            <Container
              padding={0}
              marginTop={10}
              maxW={{
                base: "100%",
                md: "100%",
                lg: "100%",
                xl: "80%",
                "2xl": "60%",
              }}
            >
              <Card
                // backgroundColor={"rgba(0, 0, 0, 0.442)"}
                maxW={"100%"}
                padding={0}
                marginTop={"50px"}
                paddingBottom={"50px"}
              >
                <Heading
                  padding={5}
                  textAlign={"center"}
                  size="sm"
                  color="white"
                  bg="#161d37 !important"
                  border="1px solid white"
                  marginBottom={"10px"}
                >
                  Coordinators
                </Heading>

                <CommitteeMembers />
              </Card>
            </Container>
          </Card>
        </Container>
      </div>
    </>
  );
}
