import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetAuth } from '../../api/api';
import { pendingFun, fulfilledFun, rejectedFun } from './UserActions';

export const fetchUser = createAsyncThunk('users/fetchByIdStatus', GetAuth);

const initialState = {
  isFound: false,
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, pendingFun);
    builder.addCase(fetchUser.fulfilled, fulfilledFun);
    builder.addCase(fetchUser.rejected, rejectedFun);
  },
});

export default usersSlice.reducer;
