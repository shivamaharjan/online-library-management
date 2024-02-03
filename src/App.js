import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import AdminSignUp from "./pages/auth/AdminSignUp";
import Books from "./pages/books/Books";
import Clients from "./pages/clients/Clients";
import Dashboard from "./pages/dashboard/Dashboard";
import History from "./pages/history/History";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-up" element={<AdminSignUp/>}></Route>
        <Route path="/books" element={<Books/>}></Route>
        <Route path="/clients" element={<Clients/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/history" element={<History/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
