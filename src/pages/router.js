import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login/index";
import Counter from "./counter/counter";
import Home from "./Home/index";
import NotFound from "./NotFound/index";
import GlobalLayout from "../Layout/GlobalLayout";
import LoginLayout from "../Layout/LoginLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
