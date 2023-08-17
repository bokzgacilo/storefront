import ProductCard from "@/components/ProductCard";
import { Box, Button, CircularProgress, Container, Flex, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const itemsPerPage = 14;

function Category(){
  const router = useRouter();
  const { cid } = router.query;

  const [products, setProducts] = useState([])

  // Pagination Handlers
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = products.slice(startIndex, endIndex);

  useEffect(() => {
    async function fetchProducts(){
      const response = await fetch(`/api/getAllProducts?cid=${cid}`);
      const jsonData = await response.json();
      setProducts(jsonData.data.data)
      console.log(jsonData.data.data)
    }

    fetchProducts();
  }, [])

  return(
    <>
      <Head>
        <title>{cid}</title>
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
                <Button variant='link' colorScheme="blue" onClick={() => {router.push('/c/')}}>Back</Button>
                <Text fontSize='xl'>{cid}</Text>
              </Flex>
          </Box>
          { products ? (
            <SimpleGrid p={2} backgroundColor='#fff'columns={[2, 4]} spacing={4}>
                <ProductCard set={displayedItems} />
            </SimpleGrid>
          ) : (
            <CircularProgress mt={4} isIndeterminate color='green.300' />
          )}
        </VStack>
      </Container>
    </>
  )
}

export default Category;