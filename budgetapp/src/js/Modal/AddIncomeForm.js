import { useContext, useState } from "react";
import DataContext from "../DataContext/DataContext";
import { createIncome } from "../API/incomes";

const AddIncomeForm = () => {

    const {incomeData, setModalType, setNewRequest, setIncomeData} = useContext(DataContext);
    const [incomesID, setIncomesID] = useState();
    const [jobName, setJobName] = useState("");
    const [amount, setAmount] = useState(0);
    
    
    


    const addIncome = (e) => {
        e.preventDefault();

        const previousIncomes = incomeData.find(member=>(member.id===incomesID)).incomes;
        

        const incomesArray = {
            incomes : [
                ...previousIncomes,
                {
                    job : jobName,
                    amount : amount
                }
            ]
        }
//MOŻE ODFILTROWAĆ WRZYSTKICH i DORZUCIC TEN OBIEKT ZMIENIONY???
        // const save = data => {
        //     setIncomeData(prev => {
        //         const currentMember = prev.find(member=>member.id===incomesID);
        //         return {
        //             ...currentMember,
        //             data
        //         }
        //     });
        // };
    
        createIncome(incomesArray, incomesID);
        setModalType(null);
        setNewRequest(true);
    }

    return (
        <form className="add-member__form" onSubmit={addIncome} >
            <label>Członek rodziny</label>
            <select value={incomesID} onChange={e=>setIncomesID(parseInt(e.target.value))}>
                {incomeData.map(incomes=>
                    <option value={incomes.id} key={incomes.id}>{incomes.name}</option>)}
            </select>
            <label>Rodzaj przychodu, np. praca</label>
            <input className="add-member__input" type="text" value={jobName} onChange={e => setJobName(e.target.value)}/>
            <label>Przychód</label>
            <input className="add-member__input" type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))}/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddIncomeForm;