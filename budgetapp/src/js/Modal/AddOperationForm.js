import { useState, useContext, useEffect } from "react";
import DataContext from "../DataContext/DataContext";
import { createOperation } from "../API/operations";

const AddOperationForm = () => {
        
    const { operationsData, setOperationsData, incomeData, expensesData , setModalType} = useContext(DataContext);
    const [categoryID, setCategoryID] = useState();
    const [subcategoryID, setSubcategoryID] = useState();
    const [incomesID, setIncomesID] = useState();
    const [subcategories, setSubcategories] = useState([]);
    const [memberID, setMemberID] = useState()
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
   
    

  
   
    useEffect(()=> {
        setSubcategories(categoryID ? expensesData.find(category=>category.id===categoryID).subcategories : []);
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
            setOperationsData(prev => [
                ...prev,
                data
            ]);
            };
       
    
        createOperation(operation, save);
        setModalType(null);
       
    }

    return (
        <form className="add-member__form" onSubmit={addOperation}>
            <label>Kategoria</label>
            <select value={categoryID} onChange={e=>{ setCategoryID(parseInt(e.target.value))}}>
                {expensesData.map(category=>
                <option value={category.id} key={category.id}>{category.category}</option>)}
            </select>
            <label>Podkategoria</label>
            <select value={subcategoryID} onChange={e=>{ setSubcategoryID(parseInt(e.target.value))}}>
                {subcategories.map(subcat=>
                <option value={subcat.id} key={subcat.id}>{subcat.subcategory}</option>)}
            </select>
            <label>Płatnik</label>
            <select value={memberID} onChange={e=>setMemberID(parseInt(e.target.value))}>
                {incomeData.map(incomes=>
                    <option value={incomes.memberID} key={incomes.memberID}>{incomes.name}</option>)}
            </select>
            <label>Data</label>
            <input className="add-member__input" value={date} type="date" onChange={e=>setDate(e.target.value)}/>
            <label>Opis</label>
            <input className="add-member__input" value={description} type="text" onChange={e=>setDescription(e.target.value)}/>
            <label>Kwota</label>
            <input className="add-member__input" value={amount} type="number" step="0.01" onChange={e=>setAmount(parseFloat(e.target.value))}/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddOperationForm;