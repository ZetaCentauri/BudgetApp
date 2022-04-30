import { useContext, useState } from "react";
import DataContext from "../DataContext/DataContext";
import { createIncome } from "../API/incomes";

const AddIncomeForm = () => {

    const {incomeData} = useContext(DataContext);
    const [memberID, setMemberID] = useState();
    const previous = incomeData.find(member=>(member.id===204))
    console.log(previous);


    // const addIncome = (e) => {
    //     e.preventDefault();

    //     const previous = incomeData.find(member=>member.id===memberID).imcomes;

    //     const incomesArray = {
    //         incomes = [
    //             ...

    //         ]
    //         name: memberName,
    //         year: year,
    //         month: month,
    //         incomes: []
    //     }


    
    //     createIncome(, memberID);
    //     setModalType(null);
    //     setNewRequest(true);
    // }

    return (
        <form className="add-member__form" >
            <label>Członek rodziny</label>
            <select value={memberID} onChange={e=>setMemberID(e.target.value)}>
                {incomeData.map(member=>
                    <option value={member.id} key={member.id}>{member.name}</option>)}
            </select>
            <label>Rodzaj przychodu, np. praca</label>
            <input className="add-member__input" type="text"/>
            <label>Przychód</label>
            <input className="add-member__input" type="text"/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddIncomeForm;