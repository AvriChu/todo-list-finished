import {
  Component,
  lazy,
  Suspense,
  use,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import Fun2 from './components/dz1_class';
import Fun1 from './components/dz1_function';
import ItemsFunct from './components/dz2_items';
import MasuvList from './components/dz3_list';
import ComponentClass from './components/dz4_classComponent';
import DZ1 from './components/dz5_1';
import DZ2 from './components/dz5_2';
import DZ3 from './components/dz5_3';
import DZ4 from './components/dz5_4';
import DZ5 from './components/dz5_5';
import DZ6_1 from './components/dz6_1';
import DZ6_2 from './components/dz6_2';
import { useWindowWidth } from './components/useWindowWidth';
import Dz7_forms from './components/dz7_forms';
import Dz9_todo from './components/dz9_todo';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Loader from './dz10_pages/Loader';
import PrivateRoute from './dz10_pages/PrivateRoute';
import { GetAuth } from './api/api';
import { AuthContext } from './components/AuthContext';
import { useDispatch } from 'react-redux';
import { fetchUser } from './redux/user/UserSlice';
// import HomePage from './dz10_pages/homePage';

// import AboutPage from './dz10_pages/aboutPage';
// import Leyout from './dz10_pages/Leyout';
// import TodoEdit from './dz10_pages/TodoEdit';
// import NotFoundPage from './dz10_pages/notFoundPage';

// function App() {
// ДЗ 1
// const [value, SetValue] = useState(true);
// const changeValue = () => {
//   SetValue(false);
// };
// return (
//   <div className='App'>
//     <header className='App-header'>
//       {value && (
//         <button class='button-37' onClick={changeValue}>
//           Натисни на мене для Доброї кінцівки!
//         </button>
//       )}
//       {value ? <Fun1 /> : <Fun2 />}
//     </header>
//   </div>
// );
//ДЗ 2
// const [input, setInput] = useState('');
// const [item, setItem] = useState([]);
// const clickHandler = input => {
//   if (!input || input.trim().length === 0) {
//     return;
//   }
//   const updateElement = [...item, input];
//   setItem(updateElement);
//   setInput('');
// };
// const changeHandler = e => {
//   const value = e.target.value;
//   setInput(value);
// };
// const onKeyFunk = e => {
//   if (e.key === 'Enter') {
//     const updateElement = [...item, input];
//     setItem(updateElement);
//     setInput('');
//   }
// };
// return (
//   <div className='App'>
//     <header className='App-header'>
//       <input
//         onKeyDown={onKeyFunk}
//         className='input'
//         onChange={changeHandler}
//         value={input}
//       />
//       <h1>{item.length}</h1>
//       <ul>
//         {item.map((element, index) => (
//           <ItemsFunct key={index} element={element} index={index} />
//         ))}
//       </ul>
//       <button className='button-37' onClick={() => clickHandler(input)}>
//         Add TO DO
//       </button>
//     </header>
//   </div>
// );
// ДЗ 3
//   const [input, setInput] = useState('');
//   const [item, setItem] = useState([
//     { id: 1, name: 'name1' },
//     { id: 2, name: 'name2' },
//     { id: 3, name: 'name3' },
//   ]);
//   const [newId, setNewId] = useState(item.length + 1);
//   const deleteObj = id => {
//     setItem(prev => prev.filter(item => item.id !== id));
//   };
//   const clickHandler = input => {
//     if (!input || input.trim().length === 0) {
//       return;
//     }
//     setNewId(newId + 1);
//     const updateElement = [...item, { id: newId, name: input }];
//     setItem(updateElement);
//     setInput('');
//   };
//   const changeHandler = e => {
//     const value = e.target.value;
//     setInput(value);
//   };
//   const onKeyFunk = e => {
//     if (e.key === 'Enter') {
//       if (!input || input.trim().length === 0) {
//         return;
//       }
//       setNewId(newId + 1);
//       const updateElement = [...item, { id: newId, name: input }];
//       setItem(updateElement);
//       setInput('');
//     }
//   };

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <input
//           onKeyDown={onKeyFunk}
//           className='input'
//           onChange={changeHandler}
//           value={input}
//         />
//         <h1>{item.length}</h1>
//         <ul>
//           {item.map(item1 => (
//             <MasuvList
//               key={item1.id}
//               id={item1.id}
//               name={item1.name}
//               deleteObj={deleteObj}
//             />
//           ))}
//         </ul>
//         <button className='button-37' onClick={() => clickHandler(input)}>
//           Add TO DO{' '}
//         </button>
//       </header>
//     </div>
//   );
// }
// ДЗ 4
// function App() {
//   return (
//     <>
//       <ComponentClass />
//     </>
//   );
// }

// ДЗ 5

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <DZ1 />
//         <DZ2 />
//         <DZ3 />
//         <DZ4 />
//         <DZ5 />
//       </header>
//     </div>
//   );
// }
// export default App;

// ДЗ 6
// function App() {
//   const [width, setWidth] = useWindowWidth();
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <DZ6_1 />
//         <DZ6_2 />
//         {/* Задача 3 */}
//         <p>Ширина вікна: {width}</p>
//       </header>
//     </div>
//   );
// }
// export default App;

// ДЗ 7
// function App() {
//   const [input, setInput] = useState('');
//   const [item, setItem] = useState([
//     { id: 1, name: 'name1' },
//     { id: 2, name: 'name2' },
//     { id: 3, name: 'name3' },
//   ]);
//   const [newId, setNewId] = useState(item.length + 1);
//   const deleteObj = id => {
//     setItem(prev => prev.filter(item => item.id !== id));
//   };
//   const clickHandler = input => {
//     if (!input || input.trim().length === 0) {
//       return;
//     }
//     setNewId(newId + 1);
//     const updateElement = [...item, { id: newId, name: input }];
//     setItem(updateElement);
//     setInput('');
//   };
//   const changeHandler = e => {
//     const value = e.target.value;
//     setInput(value);
//   };
//   const onKeyFunk = e => {
//     if (e.key === 'Enter') {
//       if (!input || input.trim().length === 0) {
//         return;
//       }
//       setNewId(newId + 1);
//       const updateElement = [...item, { id: newId, name: input }];
//       setItem(updateElement);
//       setInput('');
//     }
//   };

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <input
//           onKeyDown={onKeyFunk}
//           className='input'
//           onChange={changeHandler}
//           value={input}
//         />
//         <h1 className='tittle'>{item.length}</h1>
//         <ul>
//           {item.map(item1 => (
//             <MasuvList
//               key={item1.id}
//               id={item1.id}
//               name={item1.name}
//               deleteObj={deleteObj}
//             />
//           ))}
//         </ul>
//         <button className='button-37' onClick={() => clickHandler(input)}>
//           Add TO DO{' '}
//         </button>
//       </header>
//     </div>
//   );
// }
// export default App;

// ДЗ 8
// function App() {
//   return (
//     <header className='App-header'>
//       <Dz7_forms />
//     </header>
//   );
// }
// export default App;

// ДЗ 9
// function App() {
//   return (
//     <header className='App-header'>
//       <Dz9_todo />
//     </header>
//   );
// }
// export default App;
// ДЗ 10, 11, 12, 13
const HomePage = lazy(() => import('./dz10_pages/homePage'));
const AboutPage = lazy(() => import('./dz10_pages/aboutPage'));
const Leyout = lazy(() => import('./dz10_pages/Leyout'));
const TodoEdit = lazy(() => import('./dz10_pages/TodoEdit'));
const NotFoundPage = lazy(() => import('./dz10_pages/notFoundPage'));

function App() {
  const dispatch = useDispatch();
  // const [isAuth, setIsAuth] = useState(false);
  // const authFun = async () => {
  //   try {
  //     const data = await GetAuth();
  //     setIsAuth(data.isAuthenticated);
  //   } catch (error) {
  //     console.warn('Ops! ', error);
  //   }
  // };
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
