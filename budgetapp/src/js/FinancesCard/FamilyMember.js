import SubCategory from "./Subcategory";
import { useContext, useEffect, useState } from "react";
import Job from "./Job";
import DataContext from "../DataContext/DataContext";

const FamilyMember = ({title, jobs, memberID}) => {

    const [sum, setSum] = useState(0);
    const {setModalType, sumUpMemberIncomes, incomesData} = useContext(DataContext);

    // const incomesArray = incomes.map(income=>income.amount);
    
    useEffect(()=>{
        setSum(sumUpMemberIncomes(memberID));
       }, [incomesData]);
    



    return (
        <>
        <div className="income-list__category">
                <div className="income-list__category--name">{title}</div>
                <div className="income-list__category--sum"><span>{sum}</span> zł</div>
        </div>
        {
            jobs?.map(({job, id})=>{
                return (
                <Job key={id} job={job} jobID = {id} />
                )
            })
        }
        {/* {
            jobs.map(({job}, i)=>{
                return (
                <Job key={i} job={job} amount={amount} />
                )
            })
        } */}
        <button className="btn" onClick={()=>setModalType("job")}>Dodaj nazwę pracy lub przychodu</button>
        </>
    )
}

export default FamilyMember;