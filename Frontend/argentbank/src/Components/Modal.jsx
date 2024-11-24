import React from 'react';
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='modalback'>
            <aside className='modal'>
                <button id="fermermodale" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                <form className='username'>
                    <label htmlFor="Nom">Nom</label>
                    <input type="text" name="Nom" id="Nom" />

                    <label htmlFor="Prénom">Prénom</label>
                    <input type="text" name="Prénom" id="Prénom" />

                    <input type="submit" value="Modifier" />
                </form>
            </aside>
        </div>
    );
};

export default Modal;