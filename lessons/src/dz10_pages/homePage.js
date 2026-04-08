import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className='App-header'>
      <h1>Ласкаво просимо до вашого todo List!</h1>
      <Link className='button-37' to='/todos'>
        Розпочати
      </Link>
    </div>
  );
};

export default HomePage;
