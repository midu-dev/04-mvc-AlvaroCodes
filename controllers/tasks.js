// importar modelo
import { TaskModel } from '../models/task'

export const getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks()
  res.json(tasks)
}

export const addTask = (req, res) => {
  const task = TaskModel.addTask()
  res.json(task)
}

export const deleteTask = (req, res) => {
  TaskModel.deleteTask()
  res.json({ message: 'Deleted successfully' })
}
