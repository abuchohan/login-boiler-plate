import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
