import nc from "next-connect"
import dbConnect from "@/backend/config/dbConnect";
import { getProducts, newProduct } from "@/backend/controllers/productController";

const handler = nc()

dbConnect();

handler.get(getProducts);
handler.post(newProduct);

export default handler;
