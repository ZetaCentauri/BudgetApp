import { useContext, useEffect, useState } from "react";
import { createMember} from "../API/members";
import DataContext from "../DataContext/DataContext";



const AddMemberForm = () => {

    const [memberName, setMemberName] = useState(""); 
    const [memberID, setMemberID] = useState();
    

    const {month, year, setModalType, incomeData, setIncomeData} = useContext(DataContext);

   useEffect(()=> {
       if (incomeData.length > 0) {
       const idArr = incomeData.map(incomes=>incomes.memberID);
       const maxID = Math.max(...idArr);
    setMemberID(maxID + 1);
       } else {setMemberID(1)}
    }, [])
    

    const addMember = (e) => {
        e.preventDefault();

    
        const member = {
            memberID : memberID,
            name: memberName,
            year: year,
            month: month,
            incomes: [],
            
        }

        const save = data => {
            setIncomeData(prev => ([...prev, data]))
        };
    
        createMember(member, save)
        setModalType(null);
        // setNewRequest(true);
    }

    return (
        <form className="modal__form" onSubmit={addMember} >
            <label>Członek rodziny:
            <input className="modal__input" type="text" value={memberName} onChange={e => setMemberName(e.target.value)}/>
            </label>
            <button className="btn modal__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddMemberForm;