import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import AdminSignUp from "./pages/auth/AdminSignUp";
import Books from "./pages/books/Books";
import Clients from "./pages/clients/Clients";
import Dashboard from "./pages/dashboard/Dashboard";
import History from "./pages/history/History";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/auth/Login";
import PublicSignUp from "./pages/auth/PublicSignUp";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import ResetPassword from "./pages/auth/ResetPassword";
import AddBooks from "./pages/books/AddBooks";
import { useDispatch } from "react-redux";
import { getAllBookAction } from "./redux/books/bookAction";


function App() {


    const disptach = useDispatch();
    // Dispatch action to pull data from firebase
    // and put it in Store
    useEffect(() => {
      disptach(getAllBookAction());
    }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reset-password" element={<ResetPassword/>}></Route>
        <Route
          path="/admin-signup"
          element={
            <PrivateRoute>
              <AdminSignUp />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/sign-up" element={<PublicSignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        ></Route>
         <Route
          path="/add-books"
          element={
            <PrivateRoute>
              <AddBooks />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/clients"
          element={
            <PrivateRoute>
              <Clients />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/history" element={<History />}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
