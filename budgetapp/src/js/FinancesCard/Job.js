import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../DataContext/DataContext";
import { useContext, useEffect, useState } from "react";

const Job = ({subTitle, subcatID, catID}) => {

    
    // const [amount, setAmount] = useState(0);

    // const {sumUpSubcatExpenses} = useContext(DataContext);
    

    // useEffect(()=>{
    //     setAmount(sumUpSubcatExpenses(catID, subcatID));
    // }, []);

   
return (
    <>
    <div className="income-list__subcategory">
        <div className="income-list__subcategory--name">{subTitle}</div>
        <div className="income-list__subcategory--sum"><span></span> zł
        <button className="btn category_btn" style={{display: "inline"}}>+</button></div>
    </div>
    </>
)
}

export default Job;