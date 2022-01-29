import React from "react";
import { BrowserRouter,  Navigate,  Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { ScrollTop, CustomizedSnackbars } from "./containers";
import { Login, Register, AdminPanel } from "./views";

function App(props) {
  return (
    <BrowserRouter>
      <ScrollTop />
      <CustomizedSnackbars /> 
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/home" />} />
        <Route exact path="/login" element={<Login {...props} />} />
        <Route exact path="/register" element={<Register {...props} />} />
        <Route exact path="/admin/panel/*" element={<AdminPanel {...props} />} />
        <Route path="*" element={<MainLayout {...props} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
