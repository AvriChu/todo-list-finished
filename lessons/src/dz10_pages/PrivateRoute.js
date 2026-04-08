import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/user/UserSelector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(userSelector);
  // const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to='/' relative={true} />;
  }

  return children;
};

export default PrivateRoute;
