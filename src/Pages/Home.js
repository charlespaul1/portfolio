import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import {FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
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
          marginRight='0'
          marginBottom='0'
        />
      </Box>
      {/* Right Side */}
      <Box w={{ base: "full", md: "50%" }} textAlign={{ base: "center", md: "center" }} 
      fontSize={{base: 'sm', md:'xl'}}
      marginBottom='0'
      marginLeft={{base: '0', md:'0'}}
      >
        
        <TypingEffect text={`Hello, i'm Charlespaul Masika Wabomba`} />
        
        <Text fontSize="xl" mb={8}>
         A front-end developer with experience and knowledge in Front-end web development and design. I am a Tech enthusiast with passion in
          building excellent quality software that improves the lives of people.

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
          _hover={{ bg: '#3333' ,textDecor:'none'}}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
        >
          Connect with Me
        </Button>
        <Flex align="center"
        justifyContent='center'
        padding={8}
         >
          <Link href="https://github.com/charlespaul1" isExternal mr={4}>
            <Box as={FaGithub} size="32px" color="black"
            //  hover effect
              _hover='blue'
            />
          </Link>
          <Link href="https://twitter.com/Masikawabomba" isExternal mr={4}>
            <Box as={FaTwitter} size="32px" color="blue" hoverColor='blue' />
          </Link>
          <Link href="https://linkedin.com/in/charlespaul-wabomba-35b47522b/" isExternal>
            <Box as={FaLinkedin} size="32px" color="blue" _hover='blue' />
          </Link>
        </Flex>
      </Box>
      
      


      
    </Flex>
  );
};

export default Home;
