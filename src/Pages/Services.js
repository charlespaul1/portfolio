import React from "react";

import {
  Box,
  Flex,
  Heading,
  // Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaReact, FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import webpic from '../assets/web-app-icon.png'
import webUiUx from '../assets/website-ui-ux-icon (2).png';

const Skills = () => {
  const roles = [ {
    icon: <img src={webpic} alt="web app icon" width="48px" height="48px" />,
    name: "Front End Development",
    description: `I develop custom front end applications using current technologies and libraries`,
  },
   {
    icon: <img src={webUiUx} alt="web app icon" width="48px" height="48px" />,
    name: "UI/UX Design", 
    description: `I design user interfaces and user experiences for web and mobile applications using Figma`,
  }];
  const skills = [
    {
      icon: <FaReact size="48px"  color="blue"/>,
      name: "React Basics",
      certification:'https://coursera.org/share/d611f6efec5bfd2bae260a840e883b01'  ,
      },
      {
        icon: <FaReact size='48px' color="blue" />,
        name: 'Advanced React',
        certification: 'https://coursera.org/share/8ad629554c78b7bf4fbd1f510f57e138',
        
      },
    {
      icon: <FaHtml5 size="48px"color="orange" />,
      name: "HTML5",
      certification:
        "https://coursera.org/share/670ed49a68b6a80afcbdd6508594a53f",
    },
    {
      icon: <FaCss3 size="48px" color="blue" _hover />,
      name: "CSS3",
      certification:
        "https://coursera.org/share/46ad3a2bc364ae1507ce7fd49a348c1c",
    },
    {
      icon: <FaJsSquare size="48px" color="yellow" />,
      name: "JavaScript",
      certification:
        "https://coursera.org/share/e51a1003efbd0b7182aca531e7ebf6f0",
    },
  ];

  return (
    <Box p={8}
    background='linear-gradient(to right, rgb(187, 210, 197), rgb(83, 105, 118), rgb(41, 46, 73))'
    >
      <Heading as="h1" size="xl" mb={2}
      fontFamily={`'Cormorant SC', serif;`}
      >
        Stack
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="2xl" mb={2}>
            Programming Languages and Frameworks
          </Text>
          <Flex alignItems="center" justifyContent="center">
            {skills.map((skill) => (
              <Box key={skill.name} p={4} >
                {skill.icon}
                <Text mt={2}>{skill.name}</Text>
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="2xl" mb={4}
          fontFamily={`'Cormorant SC', serif;`}
          color='#000'
          textDecor='underline'

          >
            Online Certifications
          </Text>
          <Box maxW="400px">
            {skills.map((skill) => (
              <Flex
                key={skill.name}
                alignItems="center"
                mb={4}
                color='white'
                _hover={{ textDecoration: "underline", color:"blue" }}
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
      <Heading as="h1" size="xl" mb={8} fontFamily={`'Cormorant SC', serif;`}>
        What I Do
      </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        {roles.map((role) => (
          <Flex
            key={role.title}
            direction="column"
            alignItems="center"
            justifyContent="center"
            p={4}
            bg="gray.700"
            borderRadius="lg"
            boxShadow="md"
          >
            {role.icon}
            <Text mt={4} fontSize="2xl" fontWeight="bold" 
            color='white'
            textAlign="center">
              {role.name}
            </Text>
            <Text mt={2} 
            color='white'
            textAlign="center">{role.description}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
         
  );
};

export default Skills;
