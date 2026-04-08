import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030/';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const GetList = async () => {
  await delay(2000);
  const todos = await axios.get('todos');
  return todos.data;
};
export const GetTodo = async id => {
  const todo = await axios.get(`todos/${id}`);
  return todo.data;
};
export const GetAuth = async () => {
  const res = await axios.get('auth');
  return res.data;
};
