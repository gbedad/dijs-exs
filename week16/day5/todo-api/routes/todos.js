import express from 'express'
const router = express.Router();

import { _getAllTasks, _removeTask, _addTask } from '../controllers/todos.js';

router.get('/all',_getAllTasks);
router.delete('/remove', _removeTask);
router.post('/add', _addTask)

export default router;