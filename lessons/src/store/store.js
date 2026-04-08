import { configureStore } from '@reduxjs/toolkit';
import todoSlicer from '../redux/todos/TodosSlice';
import usersSlice from '../redux/user/UserSlice';

export const store = configureStore({
  reducer: {
    todos: todoSlicer,
    users: usersSlice,
  },
});
