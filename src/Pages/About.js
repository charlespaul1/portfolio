import React from 'react'
import {Box, Text, Flex, Image} from '@chakra-ui/react'
import TypingEffect from '../Components/Typing'
import pic from '../assets/pic.jpg'
const About = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      maxW="1200px"
      mx="auto"
      my="6rem"
      px={{ base: "1rem", md: "2rem" }}
      background={{ base: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)", md: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)" }}
      margin='0'
    >
      <Box w={{ base: "100%", md: "50%" }}>
        <Text fontSize="2xl" fontWeight="bold" mb="1rem">
          <TypingEffect text= 'About Me' color='white' />
        </Text>
        
        <Text mb="1rem">
          As a frontend React developer, I have experience in building
          responsive and user-friendly web applications using React, Chakra UI,
          and other modern web technologies.I also do web design using Figma. I'm passionate about creating
          clean, maintainable, and scalable code that delivers a great user
          experience.
        </Text>
      </Box>
      <Box w={{ base: "100%", md: "50%" }} mb={{ base: "2rem", md: "0" }}>
        <Image
          src={pic}
          alt="Developer"
          borderRadius="20px"
          boxSize="300px"
          objectFit="cover"
          mx="auto"
          mb="1rem"
          mt="1rem"
        />
      </Box>
      
    </Flex>
  );
};

export default About;