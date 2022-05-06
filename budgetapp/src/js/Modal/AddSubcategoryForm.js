import { getByPlaceholderText } from "@testing-library/dom";
import { useState, useContext} from "react";
import { createSubcategory } from "../API/subcategories";
import DataContext from "../DataContext/DataContext";


const AddSubcategoryForm = () => {
        
    const {expensesData, setModalType, setExpensesData} = useContext(DataContext);
    const [categoryID, setCategoryID] = useState(expensesData[0].id);
    const [subcategoryName, setSubcategoryName] = useState("");
 
  

    const addSubcategory = (e) => {
        e.preventDefault();
        let subcategoryID;
        const previousSubcategories = expensesData.find(category=>(category.id===categoryID)).subcategories;    
        if (previousSubcategories.length > 0) {
            const idArr = previousSubcategories.map(subcategory=>subcategory.id);
            const maxID = Math.max(...idArr);
            subcategoryID = maxID + 1 ;
        } else { subcategoryID = 1}

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
        <form className="modal__form" onSubmit={addSubcategory} >
            <label>Kategoria:
            <select className="modal__select" value={categoryID} onChange={e=>setCategoryID(parseInt(e.target.value))}>
                {expensesData.map(category=>
                    <option value={category.id} key={category.id}>{category.category}</option>)}
            </select>
            </label>
            <label>Podkategoria:
            <input className="modal__input" type="text" value={subcategoryName} onChange={e => setSubcategoryName(e.target.value)}/>
            </label>
            <button className="btn modal__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddSubcategoryForm;