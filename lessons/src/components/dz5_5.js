import { useRef } from 'react';
function DZ5() {
  const focusRef = useRef();
  const handleFocus = () => {
    focusRef.current.focus();
  };
  const handleUnFocus = () => {
    focusRef.current.blur();
  };
  return (
    <>
      <input ref={focusRef} />
      <button onClick={handleFocus}>Фокус</button>
      <button onClick={handleUnFocus}>Блюр</button>
    </>
  );
}
export default DZ5;
