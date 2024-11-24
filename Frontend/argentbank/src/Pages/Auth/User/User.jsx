import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Account from '@/Components/Account';
import AccountHeader from '@/Components/AccountHeader';
import AccountInfo from '@/assets/Data/AccountInfo.json';

import { userSelector } from '@/Redux/Selectors/userSelector';
import { accountService } from '@/_Services/accountService';

const User = () => {
    const { firstName, lastName } = useSelector(userSelector);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (accountService.isLogged()) {
            const token = accountService.getToken();
            setInfos(token);
        } else {
            navigate('/home');
        }
    }, [dispatch, navigate]);

    const setInfos = async (token) => {
        const decodedToken = await accountService.getProfile(token);
        dispatch({
            type: "User/setUserProfile",
            payload: {
                firstName: decodedToken.firstName,
                lastName: decodedToken.lastName,
            },
        });
    };

    return (
        <div className='main bg-dark'>
            <AccountHeader
                name={`${firstName} ${lastName}`}
                prenom={firstName}
                nom={lastName}
            />
            <h2 className="sr-only">Accounts</h2>
            {
                AccountInfo.map((item, index) => (
                    <Account
                        key={index}
                        title={item.title}
                        amount={item.amount}
                        description={item.description}
                    />
                ))
            }
        </div>
    );
};

export default User;
