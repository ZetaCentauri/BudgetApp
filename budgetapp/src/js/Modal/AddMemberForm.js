import { useContext, useEffect, useState } from "react";
import { createMember} from "../API/members";
import DataContext from "../DataContext/DataContext";



const AddMemberForm = () => {

    const [memberName, setMemberName] = useState(""); 
    const [memberID, setMemberID] = useState();
    
    

    const {month, year, setModalType, setNewRequest, incomeData} = useContext(DataContext);

   


   useEffect(()=> {
    fetch(`http://localhost:3005/membersIncome`)
     .then(r=>r.json())
     .then(data => {
       const idArr = data.map(incomes=>incomes.memberID);
       const maxID = Math.max(...idArr);
        setMemberID(maxID + 1);
     })
     .catch(error => {
       console.log(error);
     })
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
    
        createMember(member);
        setModalType(null);
        setNewRequest(true);
    }

    return (
        <form className="add-member__form" onSubmit={addMember} >
            <label>Członek rodziny</label>
            <input className="add-member__input" type="text" value={memberName} onChange={e => setMemberName(e.target.value)}/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddMemberForm;