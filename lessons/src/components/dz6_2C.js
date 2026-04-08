import { memo } from 'react';

const DZ6_2Child = memo(({ item, index, deletItem }) => {
  console.log('render');
  return (
    <>
      <li key={index}>{item}</li>
      <button onClick={() => deletItem(index)}>Видалити</button>
    </>
  );
});
export default DZ6_2Child;
