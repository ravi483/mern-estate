import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Profile from "./pages/Profile";
import About from "./pages/About";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
