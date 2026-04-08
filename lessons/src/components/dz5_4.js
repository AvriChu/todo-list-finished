import { useState, useReducer } from 'react';
function DZ4() {
  const initialState = {
    name: '',
    lastName: '',
    birthYear: '',
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };

      case 'SET_LASTNAME':
        return { ...state, lastName: action.payload };

      case 'SET_BIRTHYEAR':
        return { ...state, birthYear: action.payload };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [birthYearInput, setBirthYearInput] = useState('');
  return (
    <div style={{ padding: '20px' }}>
      <h2>useReducer приклад</h2>

      <div>
        <input
          type='text'
          placeholder='Введіть імʼя'
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
        />
        <button
          onClick={() => dispatch({ type: 'SET_NAME', payload: nameInput })}
        >
          Імʼя
        </button>
      </div>

      <div>
        <input
          type='text'
          placeholder='Введіть прізвище'
          value={lastNameInput}
          onChange={e => setLastNameInput(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: 'SET_LASTNAME', payload: lastNameInput })
          }
        >
          Прізвище
        </button>
      </div>

      <div>
        <input
          type='text'
          placeholder='Введіть рік народження'
          value={birthYearInput}
          onChange={e => setBirthYearInput(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch({ type: 'SET_BIRTHYEAR', payload: birthYearInput })
          }
        >
          Рік народження
        </button>
      </div>

      <hr />

      <h3>Обʼєкт state:</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
export default DZ4;
