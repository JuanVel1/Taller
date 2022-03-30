const serieSchema = require('../models/series.model');
class SeriesService{
  async createSerie(serie) {
    serie.save();
    return serie;
  }

  async listSeries() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(serieSchema.find()), 3000);
    });
  }

  async showSerie(serieId) {
    return serieSchema.findById({ _id: serieId });
  }
  
  async editSerie(
    serieId,
    serie,
    num_seasons,
    original_languaje,
    features_seasons
  ) {
    return serieSchema.findById({ _id: serieId }).then(() => {
      if (!serieId) throw Error('Serie no encontrada');
      return serieSchema.updateOne(
        { serieId },
        { serie, num_seasons, original_languaje, features_seasons }
      );
    });
  }

  async removeSerie(serieId) {
    const serieRemove = serieSchema.findById({ _id: serieId });
    return serieSchema.deleteOne(serieRemove);
  }

}

module.exports = SeriesService;