import { useState, useContext } from "react";
import { createCategory } from "../API/categories";
import DataContext from "../DataContext/DataContext";

const AddCategoryForm = () => {
    const [categoryName, setCategoryName] = useState("");

    const { setModalType, setExpensesData } = useContext(DataContext);

    const addCategory = (e) => {
        e.preventDefault();

    
        const category = {
            category : categoryName,
            subcategories : []
        }
    
        const save = data => {
            setExpensesData(prev => ([...prev, data]))
        };

        createCategory(category, save);
        setModalType(null);
        
    }

    return (
        <form className="add-member__form" onSubmit={addCategory}>
            <label>Kategoria</label>
            <input className="add-member__input" type="text" value={categoryName} onChange={e => setCategoryName(e.target.value)}/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddCategoryForm;