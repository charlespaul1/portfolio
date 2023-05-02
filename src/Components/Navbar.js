
import { Box, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React, {useEffect, useState} from 'react'
import Logo from '../assets/profile.png'

const links = [
  {
    name: "Home", path: "/"},
  {
    name: "About", path: "/about"},
  {
    name: "Services", path: "/services"},
  {
    name: "Projects", path: "/projects"},
  {
    name: "Contact", path: "/contact"}
  
]

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(()=>{
    const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, [])
 
  
  return (
    <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    zIndex={1}
    bg="rgba(22, 42, 64, 0.7)"

    
 >
      <Flex
      mx='auto'
      px={6}
      py={3}
      alignItems="center"
      >
        <Box>
          <img src={Logo} alt="logo" style={{borderRadius: '50px', height:'50px'}}/>
        </Box>
        {
          isMobile ? (
            <Box ml='auto'
            display='flex'
            color='white'
            sz='lg'
            >
              <HamburgerIcon  color= 'white' onClick={isOpen ? onClose : onOpen} cursor='pointer' />
            </Box>
          ) : (
            <Spacer />
          )}
          <Flex display={isMobile ? (isOpen ? "flex" : "none") : "flex"} 
          flexDirection={isMobile ? "column" : "row"} 
          width={isMobile ? "100%" : "auto"}  
          position={isMobile ? "absolute" : "static"} 
          top={isMobile ? "100px" : "0"} 
          left={isMobile ? "0" : "auto"} zIndex={20} 
          p={isMobile ? "20px" : "0"}
          justifyContent={isMobile ? "center" : "flex-end"}
          alignItems={isMobile ? "center" : "flex-end"}
          backgroundColor={isMobile ? "rgba(0, 0, 0, 0.8)" : "transparent"}
          animation={isMobile ? "1s ease-in-out 10s 2 slideInFromLeft" : "none"}

          >
            {links.map((link, index) => (
              <Box key={index}
              p={isMobile ? "10px" : "0"} 
              _hover={isMobile ? {color: 'gold'} : {color: 'gold'}}
              cursor='pointer'
              fontWeight='bold'
              padding={isMobile ? "10px" : "20px"}
              color={isMobile ? 'white' : 'white'}
              

              >
                <a href={link.path}>{link.name}</a></Box>
            ))}
              
              
      
     </Flex>
     </Flex>
    </Box>
  );
};

export default Navbar
