export const pendingFun = state => {
  state.loading = true;
};
export const fulfilledFun = (state, action) => {
  state.loading = false;
  state.isFound = action.payload.isAuthenticated;
};
export const rejectedFun = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};
