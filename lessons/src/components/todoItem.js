import { useState } from 'react';

const TodoItem = props => {
  const [list, setList] = useState({ cheack: false });

  const checkFun = e => {
    const checked = e.target.checked;

    setList({ cheack: checked });

    if (checked) {
      props.changeStatus(props.index, 'finished');
    } else {
      props.changeStatus(props.index, 'active');
    }
  };

  const selectChange = e => {
    props.changeStatus(props.index, e.target.value);
  };

  return (
    <>
      <li
        style={{
          textDecoration:
            props.element.status === 'finished' ? 'line-through' : 'none',
        }}
      >
        {props.index}-{props.element.text}
      </li>

      <label style={{ fontSize: '20px', color: 'grey' }}>Закреслити</label>

      <input onChange={checkFun} type='checkbox' />

      <select value={props.element.status} onChange={selectChange}>
        <option value='active'>Активний</option>
        <option value='finished'>Завершений</option>
      </select>
    </>
  );
};

export default TodoItem;
