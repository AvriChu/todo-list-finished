import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className='App-header'>
      <h1>Ой! Такого посилання не має!</h1>
      <Link className='button-37' to='/'>
        Повернутися
      </Link>
    </div>
  );
};

export default NotFoundPage;
