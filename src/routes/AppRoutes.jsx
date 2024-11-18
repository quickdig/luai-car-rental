import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Navbar from '../components/Navbar';

const AppRoutes = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </Router>
)

export default AppRoutes