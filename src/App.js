import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Content from "./Components/Content/Content";

const App = () => {
  return (
    <>
    {localStorage.setItem("UserName","Non")}
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Navbar/>}/>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/content" element={<Content/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;