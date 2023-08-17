import axios from "axios"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await axios.get("https://zyji-001.dx.commercecloud.salesforce.com/on/demandware.store/Sites-sample_storefront-Site/default/Product-Category")
  const data = response.data;

  res.status(200).json({data})
}
