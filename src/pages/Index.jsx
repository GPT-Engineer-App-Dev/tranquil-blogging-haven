import { Container, VStack, Heading, Text, Box, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to My Blog
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Thoughts, stories and ideas.
          </Text>
        </Box>
        <Box>
          <Image borderRadius="md" src="/images/blog-image.jpg" alt="Blog Image" />
        </Box>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Latest Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>This is a summary of the first post.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>This is a summary of the second post.</Text>
            </Box>
          </VStack>
        </Box>
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <VStack spacing={4}>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://github.com" isExternal>
              <FaGithub size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;