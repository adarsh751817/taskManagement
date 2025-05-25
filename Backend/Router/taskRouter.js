// const express = require('express');
// const router = express.Router();
// const { createTask, deleteTask, updateTask, showTask } = require('../Controler/taskControler')



// router.post('/create_Task', createTask);
// router.delete('/delete_Task/:taskid', deleteTask);
// router.put('/update_Task/:taskid', updateTask);
// router.get('/show_Task', showTask);



// module.exports = router; 


const express = require('express');
const router = express.Router();
const { createTask, deleteTask, updateTask, showTask } = require('../Controler/taskControler'); // corrected path and name

router.post('/create_Task', createTask);
router.delete('/delete_Task/:taskid', deleteTask); // added colon
router.put('/update_Task/:taskid', updateTask);    // added colon
router.get('/show_Task', showTask);

module.exports = router;
