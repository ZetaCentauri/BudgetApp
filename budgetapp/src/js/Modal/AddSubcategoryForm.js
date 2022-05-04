import { getByPlaceholderText } from "@testing-library/dom";
import { useState, useContext } from "react";
import { createSubcategory } from "../API/subcategories";
import DataContext from "../DataContext/DataContext";


const AddSubcategoryForm = () => {
        
    const {expensesData, setModalType, setNewRequest, setExpensesData} = useContext(DataContext);
    const [categoryID, setCategoryID] = useState();
    const [subcategoryName, setSubcategoryName] = useState("");


    const addSubcategory = (e) => {
        e.preventDefault();

        const previousSubcategories = expensesData.find(category=>(category.id===categoryID)).subcategories;
        
            console.log(previousSubcategories);
            const idArr = previousSubcategories.map(subcategory=>subcategory.id);
            const maxID = Math.max(...idArr);
            const subcategoryID = maxID + 1;
      

        const subcategoriesArray = {
            subcategories : [
                ...previousSubcategories,
                {
                    subcategory : subcategoryName,
                    id : subcategoryID
                }
            ]
        }

        const save = data => {
            setExpensesData(prev => {
                const index = prev.findIndex(category=>category.id===categoryID);
                return [...prev.slice(0, index), data, ...prev.slice(index + 1)];
            });
        };
    
        createSubcategory(subcategoriesArray, categoryID, save);
        setModalType(null);
        
    }

    return (
        <form className="add-member__form" onSubmit={addSubcategory} >
            <label>Kategoria</label>
            <select value={categoryID} onChange={e=>setCategoryID(parseInt(e.target.value))}>
                {expensesData.map(category=>
                    <option value={category.id} key={category.id}>{category.category}</option>)}
            </select>
            <label>Podkategoria</label>
            <input className="add-member__input" type="text" value={subcategoryName} onChange={e => setSubcategoryName(e.target.value)}/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddSubcategoryForm;