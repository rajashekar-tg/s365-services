import express from "express";
const router = express.Router();
import {
  createMandal,
  getMandals,
  deleteMandal,
} from "../controllers/mandalController.js";

router.get("/getmandal", getMandals);
router.post("/createmandal", createMandal);
router.delete("/deletemandal/:id", deleteMandal);

export default router;
