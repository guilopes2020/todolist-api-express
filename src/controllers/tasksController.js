const Task = require('../models/Task');

const index = async (_request, response) => {
  const tasks = await Task.getAll();

  return response.status(200).json(tasks);
};

const show = async (request, response) => {
  const { id } = request.params;

  const task = await Task.getTask(id);

  response.status(200).json(task);

};

const store = async (request, response) => {
  const newTask = await Task.creatTask(request.body);

  return response.status(201).json({
    message: 'new task created successfully',
    newTask: newTask
  });
};

const update = async (request, response) => {
  const { id } = request.params;

  await Task.updateTask(id, request.body);

  return response.status(200).json({ message: `task ${id} atualizada com sucesso` });
};

const destroy = async (request, response) => {
  const { id } = request.params;

  await Task.deleteTask(id);

  return response.status(204).json();
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy
};