
import './App.css';
import Login from './Login'
import Dashboard from './Dashboard';
import React from 'react';
import Reset from "./Reset";
import Register from './Register';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";



function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/reset" element={<Reset />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
