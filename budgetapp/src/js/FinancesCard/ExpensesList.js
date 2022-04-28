import Category from "./Category";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { useState, useEffect, useContext } from "react";
import DataContext from '../DataContext/DataContext';

const ExpensesList = () => {
    
    const {expensesData, sumUpSubcatExpenses, setModalType} = useContext(DataContext);
    
    
    // const displayNewCategoryForm = () => {
        
    // }
    

    return (
        <>
            <div className="expenses-list__card">
                <div className="expenses-list__header">
                    <div>Kategoria</div>
                    <div>Wydatki</div>
                </div>

                <div className="expenses-list__list">
                {expensesData?.map(({ id, category, subcategories}) => (
                   <Category key={id} title={category} subCategories={subcategories} catID={id}>
                       {sumUpSubcatExpenses(id)}
                   </Category>
                ))}
                </div>
            </div>
            <button className="btn" onClick={()=>setModalType("category")}> Dodaj kategorię</button>
    
        </>
        );
}

export default ExpensesList;