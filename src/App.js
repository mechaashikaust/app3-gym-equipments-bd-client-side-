import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login'
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import EquipmentDetail from './Pages/EquipmentDetail/EquipmentDetail';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';

import Checkout from './Pages/Checkout/Checkout';

import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddEquipment from './Pages/Home/AddEquipment/AddEquipment';
import ManageInventories from './Pages/Home/ManageInventories/ManageInventories';
import UpdateEquipment from './Pages/Home/UpdateEquipment/UpdateEquipment';
import { ToastContainer } from 'react-toastify';
import MyItems from './Pages/MyItems/MyItems';
import Blog from './Pages/Blog/Blog'
import ManageInventorySection from './Pages/ManageInventorySection/ManageInventorySection';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path='/equipment/:equipmentId' element={<EquipmentDetail></EquipmentDetail>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>


        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route path="/manageinventorysection" element={ <ManageInventorySection></ManageInventorySection> }></Route>



        <Route path="/checkout/:equipmentId" element=
          {
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>

        <Route path="/addequipment" element=
          {
            <RequireAuth>
              <AddEquipment></AddEquipment>
            </RequireAuth>
          }
        ></Route>

        <Route path="/manageinventory" element=
          {
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }
        ></Route>

        <Route path="/updateequipment/:id" element=
          {
            <RequireAuth>
              <UpdateEquipment></UpdateEquipment>
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
