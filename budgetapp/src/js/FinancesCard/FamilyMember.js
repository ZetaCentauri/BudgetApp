import SubCategory from "./Subcategory";
import { useEffect, useState } from "react";
import Job from "./Job";

const FamilyMember = ({title, incomes}) => {

    const [sum, setSum] = useState(0);

    const incomesArray = incomes.map(income=>income.amount);
    
    useEffect(() => {
        setSum(incomesArray.reduce((total, income)=> total+income));
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
        <button className="btn">Dodaj przychód</button>
        </>
    )
}

export default FamilyMember;