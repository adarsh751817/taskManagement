
const express = require('express');
const router = express.Router();
const { createTask, deleteTask, updateTask, showTask } = require('../Controler/taskControler'); // corrected path and name

router.post('/create_Task', createTask);
router.delete('/delete_Task/:taskid', deleteTask); // added colon
router.put('/update_Task/:taskid', updateTask);    // added colon
router.get('/show_Task', showTask);

module.exports = router;
