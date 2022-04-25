// import TimePeriod from "./Time_Period";
// import ExpensesList from "./ExpensesList";
// import IncomeList from "./IncomeList";

import {Routes, Route, Link } from 'react-router-dom';

const FinancesCard = () => {
    return (
        <>
        <div className="card">
            {/* <TimePeriod className="time-period"/> */}
            <div className="btn_container">
                <Link className="btn" to="/finances/income">Przychody</Link>
                <Link className="btn" to="/finances/expenses">Wydatki</Link>
            </div>
            <Routes>
                {/* <Route path="/income" element={<IncomeList/>} />
                <Route path="/expenses" element={<ExpensesList/>}/> */}
             </Routes>
            
        </div>
        </>
    )
}

export default FinancesCard;