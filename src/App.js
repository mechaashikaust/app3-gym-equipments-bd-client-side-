import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddService from './Pages/Home/AddService/AddService';
import ManageServices from './Pages/Home/ManageServices/ManageServices';
import UpdateService from './Pages/Home/UpdateService/UpdateService';
import { ToastContainer } from 'react-toastify';
import MyItems from './Pages/MyItems/MyItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path='/equipment/:equipmentId' element={<ServiceDetail></ServiceDetail>}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/checkout/:equipmentId" element=
          {
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>

        <Route path="/addservice" element=
          {
            <RequireAuth>
              <AddService></AddService>
            </RequireAuth>
          }
        ></Route>

        <Route path="/manageservice" element=
          {
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }
        ></Route>

        <Route path="/updateservice/:id" element=
          {
            <RequireAuth>
              <UpdateService></UpdateService>
            </RequireAuth>
          }
        ></Route>

        <Route path="/myitems" element=
          {
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}


export default App;
