import React from 'react';

import logo from '@/assets/Img/argentBankLogo.png';
import { NavLink, useNavigate } from "react-router-dom";

import { accountService } from '@/_Services/accountService';



import { useSelector } from 'react-redux';
import { userSelector } from '@/Redux/Selectors/userSelector';


const Header = () => {


    const { firstName } = useSelector(userSelector);

    const navigate = useNavigate();

    let logout = () => {
        accountService.logout();
    }

    return (
        <header>
            <nav className="main-nav">

                <NavLink className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

                {
                    accountService.isLogged() &&
                    <nav>
                        <NavLink className="main-nav-item" to="/auth/user">
                            <i className="fa fa-user-circle"></i>
                            &nbsp;
                            {firstName}
                        </NavLink>
                        <NavLink className="main-nav-item" onClick={logout} to="/home">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </nav>
                }
                {
                    !accountService.isLogged() &&
                    <nav>
                        <NavLink className="main-nav-item" to="/login">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </NavLink>
                    </nav>
                }

            </nav>
        </header >
    );
};

export default Header;