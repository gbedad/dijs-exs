import { getAllTasks, removeTask, addTask } from '../modules/todos.js';


export const _getAllTasks = (req,res) => {
  getAllTasks()
  .then(rows => {
    console.log(rows);
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
  })
}

export const _removeTask = (req, res) => {
  console.log(req.body);
  removeTask(req.body.task_name)
  .then(rows => {
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
  })
}

export const _addTask = (req, res) => {
  addTask(req.body)
  .then(rows => {
    res.json(rows)
  })
  .catch(e => {
    console.log(e);
  })
}
