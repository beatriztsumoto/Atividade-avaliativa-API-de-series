import express from "express";
import {  createSerie, deleteSerie, getAllSeries, getSeriesById, updateSerie } from "../Controllers/seriesController.js";

const router = express.Router();

router.get("/", getAllSeries);
router.get("/:id", getSeriesById);
router.post("/", createSerie);
router.delete("/:id", deleteSerie);
router.put("/:id", updateSerie)


export default router;