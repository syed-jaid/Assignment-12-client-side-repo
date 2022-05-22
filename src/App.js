import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import auth from './firebase.init';
import NotFound from './ForAll/NotFound';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddaProducts from './Pages/Dashboard/UnderDashBoard/AddaProducts';
import AddReviews from './Pages/Dashboard/UnderDashBoard/AddReviews';
import MakeAdmin from './Pages/Dashboard/UnderDashBoard/MakeAdmin';
import ManageAllOrders from './Pages/Dashboard/UnderDashBoard/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/UnderDashBoard/ManageProducts';
import MyOrders from './Pages/Dashboard/UnderDashBoard/MyOrders';
import MyProfile from './Pages/Dashboard/UnderDashBoard/MyProfile';
import Home from './Pages/Home/Home';

function App() {

  const [user] = useAuthState(auth)

  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {
          user?.email && <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
            <Route path='addReviews' element={<AddReviews></AddReviews>}></Route>
            <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path='addaProducts' element={<AddaProducts></AddaProducts>}></Route>
            <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
          </Route>
        }
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
