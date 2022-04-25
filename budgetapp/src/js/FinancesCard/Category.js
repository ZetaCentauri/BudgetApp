import SubCategory from "./Subcategory";
import { useState, useContext } from "react";
import DataContext from '../DataContext/DataContext';

const Category = ({title, subCategories}) => {

    // const [displaySubcat, setDisplaySubcat] = useState(false);
   const subcategoriesArray = subCategories.map(subCat=>subCat.subcategory);
    const expenses = subCategories.map(subCat=>subCat.expenses);
   

    return (
        <>
        
        <div className="expenses-list__category">
                <div className="expenses-list__category--name">{title}</div>
                <div className="expenses-list__category--sum"><span>{expenses.reduce((sum, expense)=>sum+expense)}</span> zł</div>
        </div>
        {
            subcategoriesArray.map((subCat, i)=>{
                return (
                <SubCategory subTitle={subCat} amount={expenses[i]} />
                )
            })
        }
        <button className="btn">Dodaj podkategorię</button>
        </>
    )
}

export default Category;