
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './Auth/LogIn';
import SignUp from './Auth/SignUp';
import Navbar from './ForAll/Navbar/Navbar';
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
import Update from './Pages/Dashboard/UnderDashBoard/Update';
import Home from './Pages/Home/Home';
import Payment from './Pages/Home/Payment';
import Purchase from './Pages/Home/Purchase';
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient()
function App() {

  return (
    <div >
      <Navbar></Navbar>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/purchase/:_id' element={<Purchase></Purchase>}></Route>
          <Route path='/payment/:_id' element={<Payment></Payment>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
            <Route path='addReviews' element={<AddReviews></AddReviews>}></Route>
            <Route path='manageAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path='addaProducts' element={<AddaProducts></AddaProducts>}></Route>
            <Route path='makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
            <Route path='update' element={<Update></Update>}></Route>
          </Route>
          <Route path='/about' element={<AboutMe></AboutMe>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/logIn' element={<LogIn></LogIn>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </QueryClientProvider>
    </div >
  );
}

export default App;
