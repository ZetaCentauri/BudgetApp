import { useContext, useEffect, useState } from "react";
import { createMember } from "../API/members";
import DataContext from "../DataContext/DataContext";

const AddMemberForm = () => {

    const [memberName, setMemberName] = useState(""); 
    

    const {month, year, setModalType, setMembersList, membersList} = useContext(DataContext);

    const addMember = (e) => {
        e.preventDefault();

        const member = {
            name: memberName,
            year: year,
            month: month,
            incomes: []
        }
    
        createMember(member);
        setModalType(null);
        setMembersList([...membersList, memberName])
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