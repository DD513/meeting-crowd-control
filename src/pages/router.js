import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/index";
import Counter from "./counter/counter";
import GlobalLayout from "../Layout/index";
import LoginLayout from "../Layout/LoginLayout";
import Home from "./Home/index";
import SignUp from "./signUp/index";
import UserProfile from "./userProfile/index";
import NotFound from "./NotFound/index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Counter />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Route>

        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
