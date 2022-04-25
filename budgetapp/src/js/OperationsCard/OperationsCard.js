import TimePeriod from "../TimePeriod";
import DataContext from '../DataContext/DataContext';
import { useContext } from "react";

const OperationsCard = () => {

    const {operationsData, expensesData} = useContext(DataContext);

    
  

    // const categoryName = expensesData.find(category=> category.id === categoryID).name;

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
            <div className="expenses-list__card">
                <div className="expenses-list__header">
                    <div>Operacje</div>
                    <div>Kwota</div>
                </div>

                <div className="expenses-list__list">
                {
                    operationsData?.map(({ id, categoryID, subcategoryID, amount, date}) => (
                    <div key = {id} className="expenses-list__subcategory">
                        <div className="expenses-list__subcategory--name">{date}</div>
                        <div>
                            <div className="expenses-list__category--name">{handleCategory(categoryID, expensesData)}</div>
                            <div className="expenses-list__subcategory--name">{handleSubcategory(subcategoryID, categoryID, expensesData)}</div>
                        </div>
                        <div className="expenses-list__subcategory--sum"><span>-{amount}</span> zł 
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
            <button className="btn"> Dodaj operację</button>
        </div>
    
    )
}

export default OperationsCard;