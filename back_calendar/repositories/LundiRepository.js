const Lundi = require('../models/Lundi');

class LundiRepository {
  constructor(model) {
    this.model = model;
  }

  // Créer un nouvel événement pour Lundi
  create(name) {
    const newLundi = { name };
    const lundi = new this.model(newLundi);
    return lundi.save();
  }

  // Retourner tous les événements pour Lundi
  findAll() {
    return this.model.find();
  }

  // Trouver un événement par son ID
  findById(id) {
    return this.model.findById(id);
  }

  // Supprimer un événement par son ID
  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  // Mettre à jour un événement par son ID
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, { $set: { name: object.name } }, { new: true });
  }
}

module.exports = new LundiRepository(Lundi);
