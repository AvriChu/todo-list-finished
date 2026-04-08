import { useMemo, useState } from 'react';
function DZ6_1() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [sum, setSum] = useState(0);
  const memosizeSum = useMemo(() => {
    return sum;
  }, [sum]);
  const changeSum = () => {
    setList([...list, list.length + 1]);
    const newSum = list.reduce((acc, curr) => acc + curr, 0);
    setSum(newSum);
  };

  return (
    <>
      <p>Сума всіх чисел {memosizeSum}</p>
      <button className='button-37' onClick={changeSum}>
        Додати нове число
      </button>
    </>
  );
}
export default DZ6_1;
