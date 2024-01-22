const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM tasks';
  const [tasks] = await connection.execute(query);

  return tasks;

};

const getTask = async (id) => {
  const query = 'SELECT * FROM tasks WHERE id = ?';
  const [task] = await connection.execute(query, [id]);

  return task;
};

const creatTask = async (task) => {
  const title = task.title;
  const query = 'INSERT INTO tasks(title, stat) VALUES (?, ?)';

  const [createdTask] = await connection.execute(query, [
    title,
    'pendente'
  ]);

  return {insertId: createdTask.insertId};

};

const updateTask = async (id, task) => {
  const { title, stat } = task;
  const query = 'UPDATE tasks SET title = ?, stat = ? WHERE id = ?';

  const updateTask = await connection.execute(query, [
    title,
    stat,
    id
  ]);

  return updateTask;

};

const deleteTask = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?';

  const removedTask = await connection.execute(query, [id]);

  return removedTask;

};

module.exports = {
  getAll,
  getTask,
  creatTask,
  updateTask,
  deleteTask
};