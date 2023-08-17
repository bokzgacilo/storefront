import { Box, Image, Card, Text, CSSReset, Spinner, VStack} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { React, useState} from "react";

function ProductCard({set}){
  const router = useRouter();
  const {cid} = router.query;
  const [loaded, setLoaded] = useState(false)

  const navigateToProduct = (id) => {
    router.push(`/c/${cid}/${id}`)
  }

  const handleImageLoad = (product_name) => {
    setLoaded(true)
  }

  return(
    <>
      <CSSReset />
      {set.map((index, key) => (
        <Card onClick={() => navigateToProduct(index.id)} key={key} w='100%'>
          <VStack >
            {loaded ? '' : 
            <Spinner thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl' />}
            <Image
              src={index.image}
              alt={index.name}
              style={{display: loaded ? 'block' : 'none'}}
              onLoad={() => handleImageLoad(index.name)}
            />
          
            <Box p={2}>
            <Text noOfLines={2} fontSize='md' as='b'>{index.name}</Text>
            </Box>
          </VStack> 
        </Card>
      ))}
      
    </>
  )
}

export default ProductCard;