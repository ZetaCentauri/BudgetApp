import { useContext, useEffect, useState } from "react";
import { createMember} from "../API/members";
import DataContext from "../DataContext/DataContext";



const AddMemberForm = () => {

    const [memberName, setMemberName] = useState(""); 
    const [memberID, setMemberID] = useState();
    

    const {setModalType, membersData, setMembersData} = useContext(DataContext);

   useEffect(()=> {
       if (membersData.length > 0) {
       const idArr = membersData.map(member=>member.id);
       const maxID = Math.max(...idArr);
    setMemberID(maxID + 1);
       } else {setMemberID(1)}
    }, [])
    

    const addMember = (e) => {
        e.preventDefault();

    
        const member = {
            id : memberID,
            memberName,
            jobs : []
        }

        const save = data => {
            setMembersData(prev => ([...prev, data]))
        };
    
        createMember(member, save)
        setModalType(null);
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