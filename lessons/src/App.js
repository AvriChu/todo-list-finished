import { lazy, Suspense, useEffect } from 'react';
import Dz9_todo from './components/dz9_todo';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Loader from './dz10_pages/Loader';
import PrivateRoute from './dz10_pages/PrivateRoute';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/user/UserSlice';
const HomePage = lazy(() => import('./dz10_pages/homePage'));
const AboutPage = lazy(() => import('./dz10_pages/aboutPage'));
const Leyout = lazy(() => import('./dz10_pages/Leyout'));
const TodoEdit = lazy(() => import('./dz10_pages/TodoEdit'));
const NotFoundPage = lazy(() => import('./dz10_pages/notFoundPage'));

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
                    <Dz9_todo />
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
