const SeriesService = require('../services/series.service');
const SerieModel = require('../models/series.model');
const service = new SeriesService();
const express = require('express');
const serieRoutes = express.Router();

serieRoutes.post('/serie', async (req, res) => {
  try {
    const serie = SerieModel(req.body);
    const data = await service.createSerie(serie);
    res.status(201).json({ data });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
});

serieRoutes.get('/', async (req, res) => {
  try {
    const data = await service.listSeries();
    res.status(200).json({ data });
  } catch (error) {
    res.status(404).json({
      message: error,
    });
  }
});

serieRoutes.put('/:serieId', async (req, res) => {
  try {
    const { serieId } = req.params;
    const { serie, num_seasons, original_languaje, features_seasons } = req.body;
    const data = await service.editSerie(
      serieId,
      serie,
      num_seasons,
      original_languaje,
      features_seasons
    );
    res.status(200).json({ data });
  } catch (error) {
    res.status(204).json({ message: err });
  }
});

serieRoutes.delete('/:serieId', async (req, res) => {
  try {
    const { serieId } = req.params;
    const data = await service.removeSerie(serieId);
    res.status(200).json({ data });
  } catch (error) {
    res.status(204).json({ message: err });
  }
});

module.exports = serieRoutes;