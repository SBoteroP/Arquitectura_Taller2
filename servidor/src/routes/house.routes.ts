import { Router } from "express";
import {
  getAvailableHouses,
  createHouse,
  updateHouse,
  deleteHouse,
  getOwnerHouses,
} from "../controllers/house.controller";

const router = Router();

// Arrendatario
router.get("/available", getAvailableHouses);

// Arrendador
router.post("/", createHouse);
router.put("/:id", updateHouse);
router.delete("/:id", deleteHouse);
router.get("/owner/:owner_id", getOwnerHouses);

export default router;