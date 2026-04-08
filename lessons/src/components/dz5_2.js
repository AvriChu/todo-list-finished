// import { useState, useRef, useLayoutEffect } from 'react';
// function DZ2() {
//   const containerRef = useRef(null);
//   const [count, setCount] = useState(0);
//   useLayoutEffect(() => {
//     if (count > 0) {
//       const paragraph = document.createElement('p');
//       paragraph.textContent = `Це абзац №${count}`;
//       paragraph.style.color = 'blue';

//       containerRef.current.appendChild(paragraph);
//     }
//   }, [count]);
//   return (
//     <>
//       <h2>useLayoutEffect приклад</h2>
//       <button onClick={() => setCount(count + 1)}>Додати абзац</button>
//       <div
//         ref={containerRef}
//         style={{
//           marginTop: '20px',
//           border: '1px solid gray',
//           padding: '10px',
//         }}
//       ></div>
//     </>
//   );
// }
// export default DZ2;
