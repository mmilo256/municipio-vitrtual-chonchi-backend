import e from "express";
import { callback, getUserInfo, login } from "./authController.js";
import '../strategies/openid-strategy.js'


const router = e.Router()

router.get("/user-info", getUserInfo)
router.get("/login", login)
router.get("/inicio", callback)


export default router