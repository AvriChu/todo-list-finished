import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetList } from '../../api/api';
import axios from 'axios';

export const fetchList = createAsyncThunk('todoList/fetchByIdStatus', GetList);

export const addTodo = createAsyncThunk(
  'todoList/addTodo',
  async (inputList, { rejectWithValue }) => {
    try {
      const newTodo = {
        tittle: inputList.name,
        desription: inputList.desription,
        checked: inputList.checked,
        creactionDate: new Date().toLocaleDateString('ua-UA'),
      };
      const response = await axios.post('todos', newTodo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todoList/deleteTodo',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`todos/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
export const updateTodo = createAsyncThunk(
  'todoList/updateTodo',
  async ({ id, editTodo }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`todos/${id}`, editTodo);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  error: null,
  loading: false,
  todos: [],
};

const todoSlicer = createSlice({
  name: 'todoList',
  initialState,
  reducers: { addFun: (state, action) => {} },
  extraReducers: builder => {
    builder.addCase(fetchList.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = action.payload;
      console.log(action.payload);
    });
    builder.addCase(fetchList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(addTodo.pending, state => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteTodo.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter(item => item.id !== action.payload);
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const index = state.todos.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    });
  },
});

export default todoSlicer.reducer;
