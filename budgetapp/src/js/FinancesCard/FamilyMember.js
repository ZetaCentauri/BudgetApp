import SubCategory from "./Subcategory";
import { useState } from "react";
import Job from "./Job";

const FamilyMember = ({title, subCategories, income}) => {


    return (
        <>
        <div className="income-list__category">
                <div className="income-list__category--name">{title}</div>
                <div className="income-list__category--sum"><span>{income.reduce((sum, item)=>sum+item)}</span> zł</div>
        </div>
        {
            subCategories.map((subCat, i)=>{
                return (
                <Job subTitle={subCat} amount={income[i]} />
                )
            })
        }
        <button className="btn">Dodaj przychód</button>
        </>
    )
}

export default FamilyMember;