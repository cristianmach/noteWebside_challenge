const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getNotes);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);
router.patch('/notes/:id/archive', noteController.archiveNote);

module.exports = router;
