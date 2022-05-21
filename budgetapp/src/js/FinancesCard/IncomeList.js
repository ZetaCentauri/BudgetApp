import { useContext, useEffect, useState } from "react";
import DataContext from '../DataContext/DataContext';
import FamilyMember from "./FamilyMember";

const IncomeList = () => {
    // const [data, setData] = useState([])
    const {incomeData, setModalType, membersData} = useContext(DataContext);


    return (
        <>
        <div className="income-list__card">
            <div className="income-list__header">
                <div>Członek rodziny</div>
                <div>Przychody</div>
             </div>
             
             <div className="income-list__list">
             {/* {incomeData?.map(({ id, name, incomes }) => (
                 <FamilyMember key={id} title={name} incomes={incomes}/>
                ))} */}

            {membersData?.map(({ id, memberName, jobs }) => (
                 <FamilyMember key={id} memberID={id} title={memberName} jobs={jobs}/>
                ))} 
            </div>
            
        </div>
        <button className="btn" onClick={()=>setModalType("member")}>Dodaj członka rodziny</button>
        </>
    )
}

export default IncomeList;