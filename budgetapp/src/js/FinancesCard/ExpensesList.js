import Category from "./Category";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { useState, useEffect, useContext } from "react";
import DataContext from '../DataContext/DataContext';

const ExpensesList = () => {
    
    const {expensesData} = useContext(DataContext);

    
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
                   <Category key={id} title={category} subCategories={subcategories} catID={id}/>
                ))}
                </div>
            </div>
            <button className="btn"> Dodaj kategorię</button>
    
        </>
        );
}

export default ExpensesList;