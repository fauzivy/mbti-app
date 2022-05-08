import express from "express";
import {
    getAllMbtis,
    getMbtiById,
    createMbti,
    updateMbti,
    deleteMbti,
} from "../controllers/Mbtis.js";
import {
    getAllResults,
    getResultById,
    createResult,
    updateResult,
    deleteResult,
    findLast,
} from "../controllers/Results.js";

const router = express.Router();

router.get("/mbtis", getAllMbtis);
router.get("/mbtis/:id", getMbtiById);
router.post("/mbtis", createMbti);
router.patch("/mbtis/:id", updateMbti);
router.delete("/mbtis/:id", deleteMbti);

router.get("/results", getAllResults);
router.get("/results/:id", getResultById);
router.get("/find", findLast);
router.post("/results", createResult);
router.patch("/results/:id", updateResult);
router.delete("/results/:id", deleteResult);

export default router;