const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTasksAPI = async () => {
  const res = await fetch(`${BASE_URL}?_limit=10`);
  const data = await res.json();
  return data.map((task) => ({
    id: task.id,
    title: task.title,
    description: "Sample description",
    status: ["To Do", "In Progress", "Done"][task.id % 3],
  }));
};

export const addTaskAPI = async (task) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
};

export const updateTaskAPI = async ({ id, ...task }) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  return await res.json();
};

export const deleteTaskAPI = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  return id;
};
