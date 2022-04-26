import DataContext from "../DataContext/DataContext";
import { useContext } from "react";

const Summary = () => {

const {totalIncome, totalExpenses} = useContext(DataContext); 



return (
<div className="summary">
    <div className="summary__container">
    <h2>PODSUMOWANIE</h2>
    <div>
        <div className="summary__income summary__item">
            <span>Przychody:</span><span>{totalIncome} zł</span>
        </div>
        <div className="summary__expenses summary__item">
            <span>Wydatki:</span><span> {totalExpenses} zł</span>
        </div>
    </div>
    <div className="summary__total summary__item"><span>Pozostało:</span><span> {(totalIncome - totalExpenses).toFixed(2)} zł</span></div>
    </div>
</div>
)
}

export default Summary;