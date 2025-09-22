import express from "express";
import { createSerie, getAllSeries, getSeriesById } from "../Controllers/seriesController.js";

const router = express.Router();

router.get("/", getAllSeries);
router.get("/:id", getSeriesById);
router.post("/", createSerie)

export default router;