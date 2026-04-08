import { useEffect, useState } from 'react';
function DZ1() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    console.log('Цифра обновилсь ,useEffect!');
  }, [num]);
  return (
    <>
      <p>{num}</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Клац
      </button>
    </>
  );
}
export default DZ1;
