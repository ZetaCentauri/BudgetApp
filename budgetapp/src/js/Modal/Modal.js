import React, { useContext, useEffect } from 'react';
import DataContext from '../DataContext/DataContext';
import AddMemberForm from './AddMemberForm';
import AddIncomeForm from './AddIncomeForm';
import AddCategoryForm from './AddCategoryForm';
import AddSubcategoryForm from './AddSubcategoryForm';
import AddOperationForm from './AddOperationForm';

const Modal = () => {
    const { modalType: type, setModalType } = useContext(DataContext);
  
   
    const getForm = () => {
    switch (type) {
        case "member":    
            return <AddMemberForm />;
        case "income":
            return <AddIncomeForm />;
        case "category":
            return <AddCategoryForm/>;
        case "subcategory":
            return <AddSubcategoryForm/>;
        case "operation":
            return <AddOperationForm/>
        default: 
            return null
    }
}

return type ? (
    <div className="modal">
        <button className="btn" onClick={()=>setModalType(null)}>x</button>
        {getForm()}
    </div>
): null;
}

export default Modal;