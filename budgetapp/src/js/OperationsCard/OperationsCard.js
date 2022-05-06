import  TimePeriod from '../TimePeriod/TimePeriod';
import DataContext from '../DataContext/DataContext';
import { useContext } from "react";

const OperationsCard = () => {

    const {operationsData, expensesData, setModalType} = useContext(DataContext);


    const handleCategory = (catID, data) => {
       return data.find(record=> record.id === catID).category;
    }

    const handleSubcategory = (subcatID, catID, data) => {
        const categoryObject = data.find(record=> record.id === catID);
        return categoryObject.subcategories.find(r => r.id === subcatID).subcategory;
    }

   
    return (
        
        <div className="card">
            <TimePeriod className="time-period"/>

            {/* <table className={"operations__table"}>
                <thead>
                    <tr className="table__header">
                        <th>Data</th>
                        <th>Kategoria</th>
                        <th>Płatnik</th>
                        <th>Kwota</th>
                        <th>Akcje</th>
                    </tr>
                </thead>
                <tbody className="table__body">
                    <tr>
                        <td>2022-05-12</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr><tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                    <tr>
                        <td>2022-05-12</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                        <td>500</td>
                        <td>Edytuj Usuń</td>
                    </tr>
                </tbody>
            </table> */}

            <div className="operations-list__card">
                <div className="operations-list__header">
                    <div>Operacje</div>
                    <div>Płatnik</div>
                    <div>Kwota</div>
                    <div>Akcje</div>
                </div>

                <div className="operations-list__list">
                {
                    operationsData?.map(({ id, categoryID, subcategoryID, amount, date}) => (
                    <div key = {id} className="operations-list__category">
                        <div className="operations-list__date">{date}</div>
                        <div>
                            <div className="operations-list__category--name">{handleCategory(categoryID, expensesData)}</div>
                            <div className="operations-list__subcategory--name">{handleSubcategory(subcategoryID, categoryID, expensesData)}</div>
                        </div>
                        <div className="operations-list__amount"><span>-{amount}</span> zł 
                        </div>
                        <div>
                        <button className="btn">Usuń</button>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
            <button className="btn" onClick={()=>setModalType("operation")}> Dodaj operację</button>
        </div>
    
    )
}

export default OperationsCard;