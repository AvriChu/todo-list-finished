import { useState } from 'react';
import DZ6_2Child from './dz6_2C';

function DZ6_2() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const deletItem = id => {
    setList(list.filter((item, i) => i !== id));
  };
  return (
    <>
      {list.map((item, index) => {
        return <DZ6_2Child item={item} index={index} deletItem={deletItem} />;
      })}
    </>
  );
}
export default DZ6_2;
