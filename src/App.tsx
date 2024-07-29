import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/auth/Login"
import './css/index.css';
import Home from "./components/Home";
import Notfound from "./components/Notfound";
import Profile from "./components/Profile";
const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
