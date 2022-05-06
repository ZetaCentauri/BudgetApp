import { useContext, useState } from "react";
import DataContext from "../DataContext/DataContext";
import { createIncome } from "../API/incomes";

const AddIncomeForm = () => {

    const {incomeData, setModalType, setIncomeData} = useContext(DataContext);
    const [incomesID, setIncomesID] = useState(incomeData[0].id);
    const [jobName, setJobName] = useState("");
    const [amount, setAmount] = useState(0);

    const addIncome = (e) => {
        e.preventDefault();
        const previousIncomes = incomeData.find(member=>(member.id===incomesID)).incomes;
        console.log(previousIncomes);

        const incomesArray = {
            incomes : [
                ...previousIncomes,
                {
                    job : jobName,
                    amount : amount
                }
            ]
        }

        const save = data => {
            setIncomeData(prev => {
                const index = prev.findIndex(monthlyIncome=>monthlyIncome.id===incomesID);
                return [...prev.slice(0, index), data, ...prev.slice(index + 1)];
            });
        };
    
        createIncome(incomesArray, incomesID, save);
        setModalType(null);
       
    }

    return (
        <form className="modal__form" onSubmit={addIncome} >
            <label>Członek rodziny:
            <select className="modal__select" value={incomesID} onChange={e=>setIncomesID(parseInt(e.target.value))}>
                {incomeData.map(incomes=>
                    <option value={incomes.id} key={incomes.id}>{incomes.name}</option>)}
            </select>
            </label>
            <label>Rodzaj przychodu:
            <input className="modal__input" type="text" value={jobName} onChange={e => setJobName(e.target.value)}/>
            </label>
            <label>Wysokość przychodu:
            <input className="modal__input" type="number" value={amount} onChange={e => setAmount(parseFloat(e.target.value))}/>
            </label>
            <button className="btn modal__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddIncomeForm;