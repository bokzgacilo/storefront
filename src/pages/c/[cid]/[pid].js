import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

function Product(){
  const router = useRouter();
  const { cid, pid } = router.query;

  return(
    <>
      <Head>
        <title>{pid}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text>{cid}</Text>
        <Text>{pid}</Text>
      </main>
    </>
  )
}

export default Product;