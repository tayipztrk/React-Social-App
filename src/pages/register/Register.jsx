import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Password don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
                await axios.post("/auth/register", user);
                history.push("/login");
            }catch(err) {
                console.log(err);
            }
        }
    };

    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">TayipSocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on TayipSocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" className="loginInput" required ref={username}/>
                        <input placeholder="Email" className="loginInput" type="email" required ref={email}/>
                        <input placeholder="Password" className="loginInput" type="password" minLength="6" required ref={password}/>
                        <input placeholder="Password Again" className="loginInput" type="password" required ref={passwordAgain} />
                        <button className="loginButton" type="submit">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link  to="/login" >
                           <button className="loginRegisterButton">Log into Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}