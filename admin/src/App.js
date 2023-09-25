import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Orders from './pages/Orders';
import ViewEnq from './pages/ViewEnq';
import ViewOrder from './pages/ViewOrder';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} /> {/* Add ToastContainer */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='inquiry' element={<Enquiries />} />
          <Route path='enquiries/:id' element={<ViewEnq />} />
          <Route path='order' element={<Orders />} />
          <Route path='order/:id' element={<ViewOrder />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
