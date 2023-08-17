import { Box, Flex, Card, Text, CSSReset, VStack} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { React} from "react";

function ProductCard({set}){
  const router = useRouter();
  const {cid} = router.query;

  const navigateToProduct = (id) => {
    router.push(`/c/${cid}/${id}`)
  }

  return(
    <>
      <CSSReset />
      {set.map((index, key) => (
        <Card onClick={() => navigateToProduct(index.id)} key={key} w='100%'>
          <VStack>
            <img
              src={index.image}
              alt={index.name}
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