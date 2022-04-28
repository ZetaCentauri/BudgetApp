import React, { useContext } from 'react';
import DataContext from '../DataContext/DataContext';
import AddMemberForm from './AddMemberForm';

const Modal = () => {
    const { modalType: type } = useContext(DataContext);

    const getForm = () => {
    switch (type) {
        case "member": 
            return <AddMemberForm />;
            default: 
                return <h1>Brak forma</h1>
    }
}

return type ? (
    <div className="modal">
        {getForm()}
    </div>
): null;
}

export default Modal;