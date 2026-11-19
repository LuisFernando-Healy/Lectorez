import { Router } from "express";
import { GetAllUniverse,CreateNewUniverse } from "../Controllers/UniverseController.js";

const router = Router()
router.get('/',GetAllUniverse)
router.post('/',CreateNewUniverse)

export default router;