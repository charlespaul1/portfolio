import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaReact, FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      icon: <FaReact size="48px" />,
      name: "React",
      certification:
        "https://coursera.org/share/4292a69ffca4738dfebf707a3e76d14b",
        // "https://coursera.org/share/d7b1009ecdb3db7421f52ad7b197af74"    
      },
    {
      icon: <FaHtml5 size="48px" />,
      name: "HTML5",
      certification:
        "https://coursera.org/share/46ad3a2bc364ae1507ce7fd49a348c1c",
    },
    {
      icon: <FaCss3 size="48px" />,
      name: "CSS3",
      certification:
        "https://coursera.org/share/46ad3a2bc364ae1507ce7fd49a348c1c",
    },
    {
      icon: <FaJsSquare size="48px" />,
      name: "JavaScript",
      certification:
        "https://coursera.org/share/e51a1003efbd0b7182aca531e7ebf6f0",
    },
  ];

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        My Skills
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="2xl" mb={4}>
            Programming Languages and Frameworks
          </Text>
          <Flex alignItems="center" justifyContent="center">
            {skills.map((skill) => (
              <Box key={skill.name} p={4} textAlign="center">
                {skill.icon}
                <Text mt={2}>{skill.name}</Text>
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="2xl" mb={4}>
            Online Certifications
          </Text>
          <Box maxW="400px">
            {skills.map((skill) => (
              <Flex
                key={skill.name}
                alignItems="center"
                mb={4}
                _hover={{ textDecoration: "underline" }}
              >
                {/* <Image
                  src={`https://www.udemy.com/staticx/udemy/images/v6/certificate/cert-grad.svg`}
                  alt="Certificate"
                  boxSize="64px"
                  mr={4}
                /> */}
                <Link href={skill.certification} isExternal>
                  {skill.name} Certification
                </Link>
              </Flex>
            ))}
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
