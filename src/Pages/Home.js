import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaArrowDown, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import pic from "../assets/pic.jpg";
import TypingEffect from "../Components/Typing";

const Home = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      px={{ base: 8, md: 24 }}
      py={{ base: 16, md: 32 }}
      minH="400px"
      background={{ base: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)", md: "linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)" }}
    >
      {/* Left Side */}
      <Box w={{ base: "full", md: "50%" }}
      
      >
        <Image
          src={pic}
          alt="Profile"
          objectFit="cover"
          boxShadow="lg"
          h={{ base: "200px", md: "300px" }}
          borderRadius='50px'
          w={{ base: "200px", md: "300px" }}
          marginTop='0'
          marginLeft='0'
          marginBottom='0'
        />
      </Box>

      {/* Right Side */}
      <Box w={{ base: "full", md: "50%" }} textAlign={{ base: "center", md: "center" }} 
      fontSize={{base: 'sm', md:'xl'}}
      marginBottom='0'
      >
        
        <TypingEffect text="Hello, I'm Charlespaul Masika Wabomba" />
        
        <Text   fontSize="xl" mb={8}>
          I am a front-end developer with experience and knowledge in Front-end web development and design. I am passionate about
          building excellent quality software that improves the lives of those around me.

        </Text>
        <Button
          colorScheme="blue"
          size="lg"
          as={Link}
          textDecor="none"          
          href="/contact"
          mb={{ base: 8, md: 0 }}
          mr={{ base: 0, md: 8 }}
          variant= 'outline'
          _hover={{ bg: '#3333'  ,textDecor:'none'}}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
        >
          Contact Me
        </Button>
        <Flex align="center"
        justifyContent='center'
        padding={8}
         >
          <Link href="https://github.com/charlespaul1" isExternal mr={4}>
            <Box as={FaGithub} size="32px" color="gray.600" hoverColor='green' />
          </Link>
          <Link href="https://twitter.com/Masikawabomba" isExternal mr={4}>
            <Box as={FaTwitter} size="32px" color="gray.600" hoverColor='' />
          </Link>
          <Link href="https://linkedin.com/in/charlespaul-wabomba-35b47522b/" isExternal>
            <Box as={FaLinkedin} size="32px" color="gray.600" />
          </Link>
        </Flex>
      </Box>

      {/* Scroll Down Icon */}
      <Box
        as={FaArrowDown}
        size="32px"
        color="linear-gradient(to top, #09203f 0%, #537895 100%)"
        position="absolute"
         bottom={0}
        right="0"
        marginTop="0"
        // animation to make it shake up and down
        animation="shake 1s infinite"
        transform="translateX(-50%)"
        cursor="pointer"
        display={{ base: "block", md: "block" }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      />
    </Flex>
  );
};

export default Home;
