import React from 'react';
import Account from '@/Components/Account';
import AccountHeader from '@/Components/AccountHeader';


import AccountInfo from '@/assets/Data/AccountInfo.json';

const User = () => {
    return (
        <div className='main bg-dark'>

            <AccountHeader />

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

        </div >
    );
};

export default User;