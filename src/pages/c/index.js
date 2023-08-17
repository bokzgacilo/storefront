import CategoryCard from "@/components/CategoryCard";
import { Text, CircularProgress, Container, VStack, Button, Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

function Index(){
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    async function fetchCategories(){
      const response = await fetch('/api/getAllCategories');
      const jsonData = await response.json();
      setCategories(jsonData.data.data)
    }

    fetchCategories();
  }, [])

  return(
    <>
      <Head>
        <title>Category</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW='1000px' px='0' py='0'>
        <VStack>
          <Box 
            p={4}
            position='sticky'
            w='100%'
            bg="white"
            top={0}
            boxShadow="md"
            zIndex={10}
            >
              <Flex direction='row' gap={4} alignItems='center'>
                <Text fontSize='xl'>Select Category</Text>
              </Flex>
          </Box>
          { categories ? (
            <CategoryCard set={categories} />
          ) : (
            <CircularProgress mt={4} isIndeterminate color='green.300' />
          )}
        </VStack>
        
      </Container>
    </>
  )
}

export default Index;