import express from "express";
import { notAllowed } from "../utils/shareFunc.js";
import { userCheck } from "../middlewares/userCheck.js";
import { addOrder, getOrderByUser } from "../controllers/orderController.js";


const router = express.Router();


router.route('/').post(userCheck, addOrder).all(notAllowed);
router.route('/users').get(userCheck, getOrderByUser).all(notAllowed);





export default router;