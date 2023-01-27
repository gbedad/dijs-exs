import db from '../config/todo-db.js'

export const getAllTasks = () => {
  return db('tasks')
  .select('*');
}

export const removeTask = (query) => {
  return db('tasks')
  .where({ task_name: query})
  .del()
  .returning('*')
}

export const addTask = (task) => {
  return db('tasks')
  .insert(task)
  .returning('*')
}
