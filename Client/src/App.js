import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Courses from './pages/Courses/Courses';
import RegPage from './pages/RegPage/RegPage';
import AuthPage from './pages/AuthPage/AuthPage'
import SingleCourse from './pages/SingleCourse/SingleCourse';




function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/courses' element={<Courses></Courses>}></Route>
      <Route path='/reg' element={<RegPage></RegPage>}></Route>
      <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
      <Route path='/:id' element={<SingleCourse></SingleCourse>}></Route>
    </Routes>
  );
}

export default App;
