import nc from "next-connect"
import dbConnect from "@/backend/config/dbConnect";
import { newProduct, getProducts } from "@/backend/controllers/productController"

const handler = nc()
dbConnect()
handler.post(newProduct)
handler.get(getProducts)

export default handler;