import { lazy, Suspense, useEffect } from 'react';
import Dz9Todo from './components/DZ9Todo';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Loader from './DZ10Pages/Loader';
import PrivateRoute from './DZ10Pages/PrivateRoute';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/user/UserSlice';
const HomePage = lazy(() => import('./DZ10Pages/HomePage'));
const AboutPage = lazy(() => import('./DZ10Pages/AboutPage'));
const Leyout = lazy(() => import('./DZ10Pages/Leyout'));
const TodoEdit = lazy(() => import('./DZ10Pages/TodoEdit'));
const NotFoundPage = lazy(() => import('./DZ10Pages/NotFoundPage'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Leyout />}>
              <Route index element={<HomePage />} />
              <Route
                path='/todos'
                element={
                  <PrivateRoute>
                    <Dz9Todo />
                  </PrivateRoute>
                }
              />
              <Route
                path='/todos/:id'
                element={
                  <PrivateRoute>
                    <TodoEdit />
                  </PrivateRoute>
                }
              />
              <Route
                path='/about'
                element={
                  <PrivateRoute>
                    <AboutPage />
                  </PrivateRoute>
                }
              />
              <Route path='/404' element={<NotFoundPage />} />
              <Route path='*' element={<Navigate to='/404' />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
export default App;
