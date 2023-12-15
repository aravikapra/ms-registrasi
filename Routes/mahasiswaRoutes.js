// routes/mahasiswaRoutes.js

const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

// Define your routes here
router.get('/', mahasiswaController.getAllMahasiswa);
router.get('/:id', mahasiswaController.getMahasiswaById);
router.post('/', mahasiswaController.createMahasiswa);
router.put('/:id', mahasiswaController.updateMahasiswa);
router.delete('/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;
