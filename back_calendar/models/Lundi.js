const mongoose = require('mongoose');
const { Schema } = mongoose;

const LundiSchema = new Schema({
  name: {
    type: String,
    required: true, // Assure que le nom est obligatoire
    trim: true, // Supprime les espaces au début et à la fin
  }
});

// Création du modèle
const Lundi = mongoose.model('Lundi', LundiSchema);

module.exports = Lundi;
