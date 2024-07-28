import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/auth/Login"
import './css/index.css';
import Home from "./components/Home";
const App=()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
