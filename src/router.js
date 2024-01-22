const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.index);
router.get('/tasks/:id', tasksController.show);
router.post('/tasks', tasksMiddleware.validateBody, tasksController.store);
router.put('/tasks/:id', tasksMiddleware.validateBody, tasksController.update);
router.delete('/tasks/:id', tasksController.destroy);

module.exports = router;