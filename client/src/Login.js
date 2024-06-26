import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserType } from "./UserType";
import "./Login.css";
import logo from './Image/Login_page.jpg';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) {
            UserType(user).then((type)=>{
                if (type === "shopowner"){
                    navigate('/shopOwnerDashboard');
                }
                else{
                    navigate('/userDashboard');
                }
            })
        }
            
    }, [user, loading]);
    return (
        <div className="login"style={{backgroundImage: "url(" + logo + ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat'
          }}>
            <div className="login__container">
            <h2>Login</h2>
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="login__btn"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/registerUser">Register as User</Link><br/> <Link to="/registerShopOwner">Register as Shop Owner</Link> now.

                </div>
            </div>
        </div>
    );
}
export default Login;