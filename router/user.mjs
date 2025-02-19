import express from "express";
import { verifyUser } from "../controller/userController.mjs";
import { verifyAdminToken } from "../middleware/verifyToken.mjs";

const route = express.Router();
route.post("/admin", verifyUser);

export default route;