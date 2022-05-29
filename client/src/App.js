
import './App.css';
import Login from './Login'
import UserDashboard from './User/Dashboard';
import ShopOwnerDashboard from './ShopOwner/Dashboard';
import React from 'react';
import Reset from "./Reset";
import RegisterUser from './RegisterUser';
import RegisterShopOwner from './RegisterShopOwner';
import Home from './Home';
// import Header from './ShopOwner/Header';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import NewDelivery from './ShopOwner/NewDelivery';



function App() {
    return (
        <div className="app">
            <Router>
                <Routes>

                    <Route  exact path="/" element={<Home />} />
                    <Route  path="/login" element={<Login />} />
                    <Route  path="/registerUser" element={<RegisterUser />} />
                    <Route  path="/registerShopOwner" element={<RegisterShopOwner />} />
                    <Route  path="/reset" element={<Reset />} />
                    <Route  path="/userDashboard" element={<UserDashboard />} />
                    <Route  path="/shopOwnerDashboard" element={<ShopOwnerDashboard />} />
                    <Route  path="/newdelivery" element={<NewDelivery />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
