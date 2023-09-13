import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, title: 'todo1 : acheter  des legumes', completed: false },
    { id: 2, title: 'todo2 : reserver un vol', completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: new Date(),
        title: action.payload.title,
        completed: action.payload.completed,
      };

      state.push(todo);
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((x) => x.id == action.payload.id);
      state[index]['completed'] = action.payload.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((x) => x.id != action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
