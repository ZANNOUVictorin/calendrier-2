const express = require('express');
const app = express.Router();
const repository = require('../repositories/LundiRepository');

// Récupérer tous les événements pour Lundi
app.get('/', (req, res) => {
  repository.findAll()
    .then((events) => {
      res.json(events);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error fetching events' });
    });
});

// Ajouter un événement pour Lundi
app.post('/', (req, res) => {
  const { name } = req.body;
  repository.create(name)
    .then((event) => {
      res.status(201).json(event);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error creating event' });
    });
});

// Supprimer un événement par ID
app.delete('/:id', (req, res) => {
  const { id } = req.params;
  repository.deleteById(id)
    .then((deletedEvent) => {
      if (!deletedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      console.log(`Deleted record with id: ${id}`);
      res.status(204).send(); // No content
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error deleting event' });
    });
});

// Mettre à jour un événement par ID
app.put('/:id', (req, res) => {
  const { id } = req.params;
  const event = { name: req.body.name }; // Met à jour uniquement le nom
  repository.updateById(id, event)
    .then((updatedEvent) => {
      if (!updatedEvent) {
        return res.status(404).json({ message: 'Event not found' });
      }
      res.status(200).json(updatedEvent);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'Error updating event' });
    });
});

module.exports = app;
