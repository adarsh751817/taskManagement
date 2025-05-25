// controllers/taskController.js
const Task = require('../Model/taskModel');

// CREATE TASK
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        status: false,
        message: 'Title and description are required.',
      });
    }

    const task = new Task({ title, description });
    await task.save();

    res.status(201).json({
      status: true,
      message: 'Task created successfully.',
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// UPDATE TASK
const updateTask = async (req, res) => {
  try {
    const { taskid } = req.params;
    const { title, description, status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      taskid,
      { title, description, status },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        status: false,
        message: 'Task not found.',
      });
    }

    res.status(200).json({
      status: true,
      message: 'Task updated successfully.',
      data: updatedTask,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// DELETE TASK
const deleteTask = async (req, res) => {
  try {
    const { taskid } = req.params;

    const deletedTask = await Task.findByIdAndDelete(taskid);

    if (!deletedTask) {
      return res.status(404).json({
        status: false,
        message: 'Task not found.',
      });
    }

    res.status(200).json({
      status: true,
      message: 'Task deleted successfully.',
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// SHOW ALL TASKS
const showTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      status: true,
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  createTask,
  updateTask,
  deleteTask,
  showTask,
};
