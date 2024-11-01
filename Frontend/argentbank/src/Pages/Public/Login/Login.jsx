import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="main bg-dark">
            <section className="sign-in-content">

                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>

                <form>
                    <div className="input-wrapper">
                        <label for="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label for="password">Password </label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me </label>
                    </div>

                    <button className="sign-in-button">Sign In</button>
                    <Link to="/auth/user"><button>BOUTON TEMPORAIRE</button></Link>

                </form>
            </section>
        </div>
    );
};

export default Login;