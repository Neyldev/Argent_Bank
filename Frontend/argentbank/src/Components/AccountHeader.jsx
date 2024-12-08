import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

const AccountHeader = ({ name, nom, prenom, username }) => {
    const userNameRef = useRef();
    const dispatch = useDispatch();
    const [isFormVisible, setIsFormVisible] = useState(false);

    const ButtonClick = () => {
        const userNameUpdated = userNameRef.current.value;

        if (userNameUpdated === "") {
            alert("Please enter a username");
            return;
        }

        dispatch({
            type: "User/setUserProfile",
            payload: {
                userName: userNameUpdated,
                firstName: prenom,
                lastName: nom,
            },
        });
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <div className="header">
                <h1>
                    Welcome back<br />{name}!
                </h1>

                <div className="test">

                    {isFormVisible && (
                        <>
                            <form className="username">
                                <input type="text" name="userName" id="userName" placeholder={username} ref={userNameRef} />
                                <input type="text" name="Prenom" id="Prénom" placeholder={prenom} disabled />
                                <input type="text" name="Nom" id="Nom" placeholder={nom} disabled />
                            </form>
                        </>
                    )}

                    <div className="buttons-container">
                        {isFormVisible && (
                            <button className="edit-button" onClick={ButtonClick}>Save</button>
                        )}
                        <button className="edit-button" onClick={toggleFormVisibility}>
                            {isFormVisible ? "Close" : "Edit Name"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountHeader;
