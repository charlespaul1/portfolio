import React from 'react'
import{Box,Flex, Button, Image,Heading, Link, Text} from '@chakra-ui/react';
import {FaGithub, FaEye} from 'react-icons/fa';
import LittleLemon from '../assets/LittleLemon.png';
import Todo from '../assets/To-do.png';

const ProjectCard = ({title, description, imageSrc, previewLink, githubLink}) =>{
  return(
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="lg" width={{ base: "100%", md: "400px" }} mx="auto">
    <Image src={imageSrc} alt={title} objectFit={{base: 'contain', md:'cover'}} _hover={{}} height="200px" />
    <Box p="6">
      <Text fontSize="xl" fontWeight="bold" mb="2">{title}</Text>
      <Text fontSize="md" color="gray.600" mb="4">{description}</Text>
      <Flex justify="space-between">
      <Button
        as={Link}
        textDecoration="none"
        href={previewLink}
        target='_blank'
        leftIcon={<FaEye/>}
        mb={6}
        variant={'outline'}
        
        >
          Preview
        </Button>
        <Button
        as={Link}
        href={githubLink}
        target='_blank'
        leftIcon={<FaGithub />}
        mb={6}
        variant={'outline'}
        textDecor={'none'}
        >
          View Source Code
        </Button>
      </Flex>
    </Box>
  </Box>
  )
}
const ProjectsPage = () => {
  const projects = [
    {
      title: "Little Lemon Restaurant",
      description: "The project was to implement a reservation booking page on the Little Lemon website to solve a reservation problem. The website previously did not have a reservation booking page, so the project required designing and integrating the new functionality into the existing website",
      imageSrc: LittleLemon,
      previewLink: "https://littlelemon.netlify.app/",
      githubLink: "https://github.com/charlespaul1/capstone_project",
    },
    {
      title: "To-do app",
      description: "This is a simple to-do app that allows you to add, edit, and delete tasks. It also allows you to mark tasks as completed.",
      imageSrc: Todo,
      previewLink: "https://todo-app-charlespaul1.netlify.app/",
      githubLink: "https://github.com/charlespaul1/TODO_app",
    },
  ]

  return (
    <Box p={{base: "4", md:"8"}} 
    bg={"linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)"}
    >
      <Heading as="h1" size="xl" mb="8" textAlign="center">Recent Projects</Heading>
      <Flex flexWrap='wrap' justifyContent='center'>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Flex>
    </Box>
  );
};

export default ProjectsPage
