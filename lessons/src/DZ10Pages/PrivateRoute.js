import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/user/UserSelector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(userSelector);
  if (!isAuth) {
    return <Navigate to='/' relative={true} />;
  }

  return children;
};

export default PrivateRoute;
