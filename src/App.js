import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import NotFound from './ForAll/NotFound';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
