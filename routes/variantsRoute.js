import express from "express";
const router = express.Router();
import { getVariants, sendVariants } from "../controllers/variantsController.js";

router.get("/test", getVariants);
router.post("/variants", sendVariants);

export default router;
