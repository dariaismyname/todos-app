import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTasks: [
    {
      id: 0,
      title: "Live",
      description: `Don't forget to live!`,
      isDone: false,
    },
    {
      id: 1,
      title: "Dream",
      description: `Don't forget to dream!`,
      isDone: false,
    },
    {
      id: 2,
      title: "Be lazy",
      description: `Just do nothing!`,
      isDone: true,
    },
    {
      id: 3,
      title: "Code",
      description: `Don't forget to code!`,
      isDone: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.allTasks.unshift(action.payload);
    },
    markIsDone: (state, action) => {
      state.allTasks.map((task) => {
        if (task.id === action.payload.id) {
          task.isDone = true;
        }
      });
    },
    markIsDoneFalse: (state, action) => {
      state.allTasks.map((task) => {
        if (task.id === action.payload.id) {
          task.isDone = false;
        }
      });
    },
  },
});

const {
  reducer: todosReducer,
  actions: { addNewTask, markIsDone, markIsDoneFalse },
} = todosSlice;

const todosActions = {
  addNewTask,
  markIsDone,
  markIsDoneFalse,
};

export { todosActions, todosReducer };
