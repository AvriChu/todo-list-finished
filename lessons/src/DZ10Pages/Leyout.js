import { NavLink, Outlet } from 'react-router-dom';
const Leyout = () => {
  return (
    <>
      <nav className='new-header'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/todos'>Туду Ліст</NavLink>
        <NavLink to='/about'>Про застосунок</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Leyout;
