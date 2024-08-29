import express from "express";
import { addProduct, getProductById, getProducts, removeProduct, updateProduct } from "../controllers/productController.js";
import { notAllowed } from "../utils/shareFunc.js";
import { updateFile, validFile } from "../middlewares/fileValid.js";
import { adminCheck, userCheck } from "../middlewares/userCheck.js";


const router = express.Router();


router.route('/').get(getProducts).post(userCheck, adminCheck, validFile, addProduct).all(notAllowed);

router.route('/:id').get(getProductById).patch(userCheck, adminCheck, updateFile, updateProduct).delete(userCheck, adminCheck, removeProduct).all(notAllowed);


export default router;