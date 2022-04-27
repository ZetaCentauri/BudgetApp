import { useContext, useEffect, useState } from "react";
import DataContext from '../DataContext/DataContext';
import FamilyMember from "./FamilyMember";

const IncomeList = () => {
    // const [data, setData] = useState([])
    const {incomeData} = useContext(DataContext);

    

    return (
        <>
        <div className="income-list__card">
            <div className="income-list__header">
                <div>Członek rodziny</div>
                <div>Przychody</div>
             </div>
             
             <div className="income-list__list">
             {incomeData?.map(({ id, name, incomes }) => (
                 <FamilyMember key={id} title={name} incomes={incomes}/>
                ))}
            </div>
            
        </div>
        <button className="btn">Dodaj członka rodziny</button>
        </>
    )
}

export default IncomeList;