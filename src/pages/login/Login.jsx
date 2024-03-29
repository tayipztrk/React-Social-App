import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";    

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
          );
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
                        <input placeholder="Email" className="loginInput" type="email" required ref={email} />
                        <input placeholder="Password" className="loginInput" type="password" required ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="white" size="20px"/>
                            ) : (
                                "Log In"
                            )}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="register">
                        <button  className="loginRegisterButton">
                        {isFetching ? (
                                <CircularProgress color="white" size="20px"/>
                            ) : (
                                "Create a New Account"
                            )}
                        </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}