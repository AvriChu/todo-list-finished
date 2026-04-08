import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { GetTodo } from '../api/api';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TodoEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching } = useQuery({
    queryKey: ['todoItem', id],
    queryFn: () => GetTodo(id),
  });
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    if (data) {
      setEditTodo(data);
    }
  }, [data]);

  const handleSave = async () => {
    await axios.put(`todos/${id}`, editTodo);
    navigate('/todos');
  };
  if (isFetching || !editTodo) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className='App-header'>
      <h3>Редагувати Todo</h3>
      <label>Ім'я</label>
      <input
        type='text'
        value={editTodo.tittle}
        onChange={e =>
          setEditTodo(prev => ({
            ...prev,
            tittle: e.target.value,
          }))
        }
      />
      <label>Опис</label>
      <input
        type='text'
        value={editTodo.desription}
        onChange={e =>
          setEditTodo(prev => ({
            ...prev,
            desription: e.target.value,
          }))
        }
      />
      <label>Виконаний?</label>
      <input
        type='checkbox'
        checked={editTodo.checked}
        onChange={e =>
          setEditTodo(prev => ({
            ...prev,
            checked: e.target.checked,
          }))
        }
      />
      <Link onClick={handleSave} to='/todo-list' className='button-37'>
        Зберегти
      </Link>
    </div>
  );
};

export default TodoEdit;
