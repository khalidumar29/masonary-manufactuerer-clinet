import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Shared/Footer/Footer";
import Purchase from "./Components/Purchase/Purchase";
import MyProtfolio from "./Pages/MyProtfolio/MyProtfolio";

function App() {
  return (
    <div className='lg:mx-8'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/myprotfolio' element={<MyProtfolio />}></Route>
        <Route path='/purchase' element={<Purchase />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
