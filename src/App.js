import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Purchase from "./Components/Purchase/Purchase";
import MyProtfolio from "./Pages/MyProtfolio/MyProtfolio";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Blogs from "./Pages/Blogs/Blogs";
import RequireAuth from "./Shared/RequireAuth/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import { Toaster } from "react-hot-toast";
import AddAReview from "./Pages/Dashboard/AddAReview/AddAReview";
function App() {
  return (
    <div className='lg:mx-8'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index path='' element={<MyProfile />}></Route>
          <Route path='orders' element={<MyOrders />}></Route>
          <Route path='review' element={<AddAReview />}></Route>
        </Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route
          path='/purchase/:id'
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
