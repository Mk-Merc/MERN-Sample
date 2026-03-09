const express = require('express');

const router = express.Router();

module.exports = router;

// GET notes
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Notes API!' });
});

// GET single note
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `You requested node with ID: ${id}` });
});

// POST create a new note
router.post('/', (req, res) => {
    res.json({ message: 'Note created successfully!' });
});

// DELETE a note
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} deleted successfully!` });
});

// UPDATE a note
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Note with ID: ${id} updated successfully!` });
});