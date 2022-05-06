import { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext/DataContext";
import { createOperation } from "../API/operations";

const AddOperationForm = () => {
        
    const { operationsData, setOperationsData, incomeData, expensesData , setModalType, month} = useContext(DataContext);
    const [categoryID, setCategoryID] = useState(expensesData[0].id);
    const [subcategoryID, setSubcategoryID] = useState();
    // const [incomesID, setIncomesID] = useState();
    const [subcategories, setSubcategories] = useState([]);
    const [memberID, setMemberID] = useState(incomeData[0].memberID)
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
   
    

  
   
    useEffect(()=> {
        setSubcategories(categoryID ? expensesData.find(category=>category.id===categoryID).subcategories : []);
        setSubcategoryID(categoryID ? expensesData.find(category=>category.id===categoryID).subcategories[0].id : null);
    }, [categoryID]);
    
    const addOperation = (e) => {
        e.preventDefault();

        const operation = {
            categoryID,
            subcategoryID, 
            payerID : memberID,
            date,
            month: parseInt(date[5] === 1? date.slice(5,7) : date[6]),
            year: parseInt(date.slice(0,4)),
            description,
            amount
        }

        const save = data => {
            if (data.month === month) {
            setOperationsData(prev => [
                ...prev,
                data
            ]);
              }
            };
       
    
        createOperation(operation, save);
        setModalType(null);
       
    }

    return (
        <form className="modal__form" onSubmit={addOperation}>
            <label>Kategoria: 
            <select className={"modal__select"} value={categoryID} onChange={e=>{ setCategoryID(parseInt(e.target.value))}}>
                {expensesData.map(category=>
                <option value={category.id} key={category.id}>{category.category}</option>)}
            </select>
            </label>
            <label>Podkategoria: 
            <select className={"modal__select"} value={subcategoryID} onChange={e=>{ setSubcategoryID(parseInt(e.target.value))}}>
                {subcategories.map(subcat=>
                <option value={subcat.id} key={subcat.id}>{subcat.subcategory}</option>)}
            </select>
            </label>
            <label>Płatnik: 
            <select className={"modal__select"} value={memberID} onChange={e=>setMemberID(parseInt(e.target.value))}>
                {incomeData.map(incomes=>
                    <option value={incomes.memberID} key={incomes.memberID}>{incomes.name}</option>)}
            </select>
            </label>
            <label>Data:
            <input className="modal__input" value={date} type="date" onChange={e=>setDate(e.target.value)}/>
            </label>
            <label>Opis:
            <textarea className="modal__input" value={description} type="textarea" onChange={e=>setDescription(e.target.value)}/>
            </label>
            <label>Kwota:
            <input className="modal__input" value={amount} type="number" step="0.01" onChange={e=>setAmount(parseFloat(e.target.value))}/>
            </label>
            <button className="btn modal__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddOperationForm;