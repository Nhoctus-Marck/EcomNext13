import ProductsDetails from '@/components/products/ProductsDetails'
import React from 'react'
import axios from 'axios'

const getProductsDetails = async (id) =>{
    const {data} = await axios.get(`${process.env.API_URL}/api/products/${id}`)
    return data?.product
}

const ProductDetailsPage = async ({params}) => {
    const product = await getProductsDetails(params.id)
    console.log(product)
  return (
    <ProductsDetails product={product}/>
  )
}

export default ProductDetailsPage