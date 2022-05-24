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

function App() {
  return (
    <div className='lg:mx-8'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio />}></Route>
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
    </div>
  );
}

export default App;
