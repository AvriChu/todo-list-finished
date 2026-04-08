import { useState } from 'react';
import TodoItem from './todoItem';
import { useForm } from 'react-hook-form';

const Todo = () => {
  const [item, setItem] = useState([]);
  const [value, setValue] = useState('all');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const addTodo = (data, e) => {
    e.preventDefault();
    const updateElement = [...item, { text: data.todo, status: 'active' }];
    setItem(updateElement);
    reset();
  };

  const valueFunc = e => {
    setValue(e.target.value);
  };

  const changeStatus = (index, status) => {
    const newList = [...item];
    newList[index].status = status;
    setItem(newList);
  };

  const filteredTodos = item.filter(el => {
    if (value === 'active') return el.status === 'active';
    if (value === 'finished') return el.status === 'finished';
    return true;
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <p>Напишіть туду і виберіть його статус</p>

        <form onSubmit={handleSubmit(addTodo)}>
          <input
            className='input'
            {...register('todo', {
              required: 'Поле не може бути пустим',
              minLength: {
                value: 3,
                message: 'Мінімум 3 символи',
              },
              maxLength: {
                value: 20,
                message: 'Максимум 20 символів',
              },
            })}
          />

          <button className='button-37' type='submit'>
            Add TO DO
          </button>
        </form>
        {errors.todo && <p style={{ color: 'red' }}>{errors.todo.message}</p>}

        <label htmlFor='select'>Фільтр:</label>
        <select onChange={valueFunc} value={value}>
          <option value='active'>Активний</option>
          <option value='finished'>Завершений</option>
          <option value='all'>Всі</option>
        </select>

        <h1>{item.length}</h1>

        <ul>
          {filteredTodos.map((element, index) => (
            <TodoItem
              key={index}
              element={element}
              index={index}
              changeStatus={changeStatus}
            />
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Todo;
