import { useState } from 'react';
function DZ3() {
  const nameList = ['Іван', 'Катя', 'Богдан', 'Максим', 'Кирило'];
  const [massage, setMassage] = useState('');

  const printMassage = () => {
    const randomName1 = nameList[Math.floor(Math.random() * nameList.length)];
    const randomName2 = nameList[Math.floor(Math.random() * nameList.length)];
    setMassage(`Hello ${randomName1}, де ${randomName2}`);
  };
  return (
    <>
      <p>{massage}</p>
      <button onClick={printMassage}>setCount</button>
    </>
  );
}
export default DZ3;
