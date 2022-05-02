import { useContext, useState } from "react";
import DataContext from "../DataContext/DataContext";
import { createIncome } from "../API/incomes";

const AddIncomeForm = () => {

    const {incomeData, setModalType, setNewRequest} = useContext(DataContext);
    const [memberID, setMemberID] = useState();
    const [jobName, setJobName] = useState("");
    const [amount, setAmount] = useState(0);
    
    
    


    const addIncome = (e) => {
        e.preventDefault();

        const previousIncomes = incomeData.find(member=>(member.id===201)).incomes;
        

        const incomesArray = {
            incomes : [
                ...previousIncomes,
                {
                    job : jobName,
                    amount : parseFloat(amount)
                }
            ]
        }

    
        createIncome(incomesArray, memberID);
        setModalType(null);
        setNewRequest(true);
    }

    return (
        <form className="add-member__form" onSubmit={addIncome} >
            <label>Członek rodziny</label>
            <select value={memberID} onChange={e=>setMemberID(e.target.value)}>
                {incomeData.map(member=>
                    <option value={member.id} key={member.id}>{member.name}</option>)}
            </select>
            <label>Rodzaj przychodu, np. praca</label>
            <input className="add-member__input" type="text" value={jobName} onChange={e => setJobName(e.target.value)}/>
            <label>Przychód</label>
            <input className="add-member__input" type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddIncomeForm;