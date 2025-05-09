import { fetchTasks, createTask, updateTask } from "../features/tasks/taskAPI";

export const loadTasks = async (setTasks) => {
  const tasks = await fetchTasks();
  setTasks(tasks);
};

export const addTask = async (task, setTasks) => {
  const newTask = await createTask(task);
  newTask.status = task.status;
  setTasks((prev) => [...prev, newTask]);
};

export const changeTaskStatus = async (taskId, newStatus, tasks, setTasks) => {
  const task = tasks.find((t) => t.id === taskId);
  if (!task) return;

  await updateTask(taskId, { ...task, status: newStatus });
  setTasks(
    tasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
  );
};
