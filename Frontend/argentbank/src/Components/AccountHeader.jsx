import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

const AccountHeader = ({ name, nom, prenom }) => {
    const prenomRef = useRef();
    const dispatch = useDispatch();

    const ButtonClick = () => {
        const FirstNameUpdated = prenomRef.current.value;

        if (FirstNameUpdated === "") {
            alert("Merci de saisir un Prénom");
            return;
        }

        dispatch({
            type: "User/setUserProfile",
            payload: {
                firstName: FirstNameUpdated,
                lastName: nom,
            },
        });

    };

    return (
        <div>
            <div className="header">
                <h1>Welcome back<br />{name}!</h1>

                <form className='username'>
                    <input type="text" name="Prénom" id="Prénom" placeholder={prenom} ref={prenomRef} />
                    <input type="text" name="Nom" id="Nom" placeholder={nom} disabled />
                </form>

                <button className="edit-button" onClick={ButtonClick}>
                    Edit Name
                </button>
            </div>
        </div>
    );
};

export default AccountHeader;
