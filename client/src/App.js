
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
import Requests from './ShopOwner/Requests'
import UserAllocated from './User/UserAllocated';
import UserCompleted from './User/UserCompleted';
import ShopOwnerAllocated from './ShopOwner/ShopOwnerAllocated';
import ShopOwnerCompleted from './ShopOwner/ShopOwnerCompleted';
import ShopOwnerCollected from './ShopOwner/Collected';
import UserCollected from './User/Collected';

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
                    <Route  path="/requests/:id" element={<Requests />} />
                    <Route  path="/userAllocated" element={<UserAllocated />} />
                    <Route  path="/userCompleted" element={<UserCompleted />} />
                    <Route  path="/shopOwnerAllocated" element={<ShopOwnerAllocated />} />
                    <Route  path="/shopOwnerCompleted" element={<ShopOwnerCompleted />} />
                    <Route  path="/shopOwnerTaken" element={<ShopOwnerCollected />} />
                    <Route  path="/userTaken" element={<UserCollected />} />

                    <Route  path="/newdelivery" element={<NewDelivery />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
