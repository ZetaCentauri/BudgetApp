import SubCategory from "./Subcategory";
import { useState, useContext, useEffect } from "react";
import DataContext from '../DataContext/DataContext';

const Category = ({title, subCategories, catID}) => {

    
    const [sum, setSum] = useState(0);
    const {sumUpSubcatExpenses, month} = useContext(DataContext);
    
    useEffect(()=> {
        setSum(sumUpSubcatExpenses(catID));
    },[month])
   

    return (
        <>
        
        <div className="expenses-list__category">
                <div className="expenses-list__category--name">{title}</div>
                <div className="expenses-list__category--sum"><span>{sum}</span> zł</div>
        </div>
        {
            subCategories.map(({subcategory, id}) => {
                return <SubCategory key={id} subTitle={subcategory} subcatID = {id} catID={catID}/>
            })
        }
        <button className="btn">Dodaj podkategorię</button>
        </>
    )
}

export default Category;