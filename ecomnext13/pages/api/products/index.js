import nc from "next-connect"
import dbConnect from "@/backend/config/dbConnect";
import { newProduct } from "@/backend/controllers/productController"

const handler = nc()
dbConnect()
handler.post(newProduct)

export default handler;