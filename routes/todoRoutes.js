const express = require('express');
const {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo,
} = require('../controllers/todoController');
const authenticateToken = require('../middlewares/authMiddleware'); // Correct import

const router = express.Router();

// Apply middleware
router.use(authenticateToken);

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
