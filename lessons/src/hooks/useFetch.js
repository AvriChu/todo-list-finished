import { useState, useEffect } from 'react';
import { GetList } from '../api/api';

export const useFetch = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const data = await GetList();
    setLoading(false);
    setTodos(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { todos, loading };
};
