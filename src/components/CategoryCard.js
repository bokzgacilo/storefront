import { Box, Card, Text, CSSReset} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { React, useState } from "react";

function CategoryCard({set}){
  const router = useRouter();

  const navigateToCategory = (id) => {
    router.push(`/c/${id}`)
  }

  return(
    <>
      <CSSReset />
      {set.map((index, key) => (
        <Card onClick={() => navigateToCategory(index.id)} backgroundColor='#fff' direction='row' key={key} p='4' w='100%'>
          <Text noOfLines={2} fontSize='md' as='b'>{index.name}</Text>
          <Text fontSize='xl'>{index.price}</Text>
        </Card>
      ))}
    </>
  )
}

export default CategoryCard;