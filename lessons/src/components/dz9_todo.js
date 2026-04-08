import { useEffect, useState } from 'react';
import { GetList } from '../api/api';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, fetchList } from '../redux/todos/TodosSlice';

const Dz9_todo = () => {
  // const getFun = async () => {
  //   if (inputList.name && inputList.desription) {
  //     try {
  //       setRequestLoading(true);
  //       const newTodo = {
  //         tittle: inputList.name,
  //         desription: inputList.desription,
  //         checked: inputList.checked,
  //         creactionDate: new Date().toLocaleDateString('ua-UA'),
  //       };
  //       const response = await axios.post('todos', newTodo);
  //       setButtonsCl(false);
  //       setTodos(prev => [...prev, response.data]);
  //       setInputList({
  //         name: '',
  //         desription: '',
  //         checked: false,
  //       });
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setRequestLoading(false);
  //     }
  //   }
  // };
  const getFun = async () => {
    dispatch(addTodo(inputList));
    setButtonsCl(false);
    setInputList({
      name: '',
      desription: '',
      checked: false,
    });
  };
  // const deleteFun = async id => {
  //   try {
  //     // setRequestLoading(true);
  //     await axios.delete(`todos/${id}`);
  //     setTodos(prev => prev.filter(item => item.id !== id));
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     // setRequestLoading(false);
  //   }
  // };
  const deleteFun = async id => {
    dispatch(deleteTodo(id));
  };
  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const data = await GetList();
  //     setTodos(data);
  //   } catch (error) {
  //     console.warn('Ops! ', error);
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    // fetchData();
    dispatch(fetchList());
  }, [dispatch]);

  // const [todos, setTodos] = useState([]);
  // const [error, setError] = useState(null);
  const [inputList, setInputList] = useState({
    name: '',
    desription: '',
    checked: false,
  });
  // const [requestLoading, setRequestLoading] = useState(false);
  const todos = useSelector(state => state.todos.todos);
  const loading = useSelector(state => state.todos.loading);
  const error = useSelector(state => state.todos.error);
  const [buttonCl, setButtonsCl] = useState(false);
  if (error) {
    return (
      <div className='App-header' style={{ color: 'red' }}>
        Відбулася помилка: {error}
      </div>
    );
  }
  return (
    <div className='App-header'>
      {loading && <h2>Loading...</h2>}
      <ul>
        <button className='button-37' onClick={() => setButtonsCl(true)}>
          Add TO DO
        </button>
        {buttonCl && (
          <div className='input-list'>
            <label htmlFor='name'>Ім'я</label>
            <input
              onChange={e => {
                setInputList(prev => ({
                  ...prev,
                  name: e.target.value,
                }));
              }}
              type='text'
              name='name'
              id='name'
              value={inputList.name}
            />
            <label htmlFor='desription'>Опис</label>
            <input
              onChange={e => {
                setInputList(prev => ({
                  ...prev,
                  desription: e.target.value,
                }));
              }}
              type='text'
              name='desription'
              id='desription'
              value={inputList.desription}
            />
            <label htmlFor='checked'>Виконаний?</label>
            <input
              onChange={e => {
                setInputList(prev => ({
                  ...prev,
                  checked: e.target.checked,
                }));
              }}
              type='checkbox'
              name='checked'
              id='checked'
              checked={inputList.checked}
            />
            <button onClick={getFun} type='button' className='button-37'>
              Добавити запит
            </button>
          </div>
        )}
        {loading ? (
          <h1>Loading todos...</h1>
        ) : todos.length === 0 ? (
          <h1>Наразі у вас немає ще завдань</h1>
        ) : (
          todos.map(todo => (
            <div className='list-item' key={todo.id}>
              <li>
                {todo.id} - {todo.tittle}
              </li>
              <p>{todo.desription}</p>
              <label style={{ fontSize: 12 }} htmlFor='cheacked'>
                Чи виконаний?
              </label>
              <input name='cheacked' type='checkbox' checked={todo.checked} />
              <button onClick={() => deleteFun(todo.id)} className='button-24'>
                Видалити
              </button>
              <Link className='button-24' to={`${todo.id}`}>
                Редагувати
              </Link>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dz9_todo;
