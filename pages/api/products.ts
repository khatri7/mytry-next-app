import { wooClient } from '../../api-utils'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from 'types/commons'

export const getProductsServerSide = async (queryParams = {}): Promise<{ data: Product[] }> => await wooClient.get('products', queryParams)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    data
  } = await getProductsServerSide(req.query)
  res.json(data)
}