import React from 'react'
import {
    Container,
    Text,
    Card,
    Heading,
} from "@chakra-ui/react";
import backd from "../../assets/main-bg.jpg";
import CommitteeMembers from "./CommitteeMembers";
import ChiefPatrons from "./ChiefPatrons";
import Patrons from "./Patrons";
import CoPatrons from "./CoPatrons";
import Conveners from "./Coveners";


const OrganisingCommittee = () => {
  return (
    <>
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
            textAlign: "center",
          }}
        >
          <Text>Organizing Committee</Text>
        </div>
        <Container
          background={"transparent"}
          className="committee-section"
          padding={5}
          maxW={"100%"}
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
                  size="md"
                  color="white"
                  // bg="#161d37 !important"
                  border="1px solid white"
                  style={{
                    background: `url(${backd})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  CHIEF PATRONS
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
                  size="md"
                  color="white"
                  // bg="#161d37 !important"
                  border="1px solid white"
                  style={{
                    background: `url(${backd})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  PATRONS
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
                  size="md"
                  color="white"
                  // bg="#161d37 !important"
                  border="1px solid white"
                  style={{
                    background: `url(${backd})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  CO-PATRONS
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
                  size="md"
                  color="white"
                  // bg="#161d37 !important"
                  border="1px solid white"
                  style={{
                    background: `url(${backd})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  CONVENERS
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
                backgroundColor={"rgba(0, 0, 0, 0.442)"}
                maxW={"100%"}
                padding={0}
              >
                <Heading
                  padding={5}
                  textAlign={"center"}
                  size="md"
                  color="white"
                  // bg="#161d37 !important"
                  border="1px solid white"
                  style={{
                    background: `url(${backd})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  marginBottom={"10px"}
                >
                  COORDINATORS
                </Heading>
                <CommitteeMembers />
              </Card>
            </Container>

        </Container>
    </>
  )
}

export default OrganisingCommittee;