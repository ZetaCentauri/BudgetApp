import SubCategory from "./Subcategory";
import { useContext, useEffect, useState } from "react";
import Job from "./Job";
import DataContext from "../DataContext/DataContext";

const FamilyMember = ({title, incomes}) => {

    const [sum, setSum] = useState(0);
    const {setModalType} = useContext(DataContext);

    const incomesArray = incomes.map(income=>income.amount);
    
    useEffect(() => {
        if (incomesArray.length > 0) {
        setSum(incomesArray.reduce((total, income)=> total+income));
        } else {
            setSum(0);
        }
    }, []);




    return (
        <>
        <div className="income-list__category">
                <div className="income-list__category--name">{title}</div>
                <div className="income-list__category--sum"><span>{sum}</span> zł</div>
        </div>
        {
            incomes.map(({job, amount}, i)=>{
                return (
                <Job key={i} job={job} amount={amount} />
                )
            })
        }
        <button className="btn" onClick={()=>setModalType("income")}>Dodaj przychód</button>
        </>
    )
}

export default FamilyMember;