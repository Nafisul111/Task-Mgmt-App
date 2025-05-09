import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTasksAPI,
  addTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
} from "./taskAPI";

export const fetchTasks = createAsyncThunk("tasks/fetch", fetchTasksAPI);
export const addTask = createAsyncThunk("tasks/add", async (task) => {
  const newTask = await addTaskAPI(task);
  newTask.status = task.status;
  return newTask;
});
export const updateTask = createAsyncThunk("tasks/update", updateTaskAPI);
export const deleteTask = createAsyncThunk("tasks/delete", deleteTaskAPI);

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
