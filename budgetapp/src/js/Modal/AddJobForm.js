import { getByPlaceholderText } from "@testing-library/dom";
import { useState, useContext} from "react";
import { createJob } from "../API/jobs";
import DataContext from "../DataContext/DataContext";


const AddJobForm = () => {
        
    const {setModalType, membersData, setMembersData} = useContext(DataContext);
    const [memberID, setMemberID] = useState(membersData[0].id);
    const [jobName, setJobName] = useState("");
  

    const addJob = (e) => {
        e.preventDefault();

        let jobID;
        const previousJobs = membersData.find(member=>(member.id===memberID)).jobs;    
        if (previousJobs.length > 0) {
            const idArr = previousJobs.map(job=>job.id);
            const maxID = Math.max(...idArr);
            jobID = maxID + 1 ;
        } else { jobID = 1}

        const jobsArray = {
            jobs : [
                ...previousJobs,
                {
                    job : jobName,
                    id : jobID
                }
            ]
        }

        const save = data => {
            setMembersData(prev => {
                const index = prev.findIndex(member=>member.id===memberID);
                return [...prev.slice(0, index), data, ...prev.slice(index + 1)];
            });
        };
    
        createJob(jobsArray, memberID, save);
        setModalType(null);
    }

    return (
        <form className="modal__form" onSubmit={addJob} >
            <label>Członek rodziny:
            <select className="modal__select" value={memberID} onChange={e=>setMemberID(parseInt(e.target.value))}>
                {membersData.map(member=>
                    <option value={member.id} key={member.id}>{member.memberName}</option>)}
            </select>
            </label>
            <label>Nazwa pracy lub przychodu:
            <input className="modal__input" type="text" value={jobName} onChange={e => setJobName(e.target.value)}/>
            </label>
            <button className="btn modal__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddJobForm;