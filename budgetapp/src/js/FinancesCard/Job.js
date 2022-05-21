import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../DataContext/DataContext";
import { useContext, useEffect, useState } from "react";

const Job = ({job, jobID : id}) => {


const {incomesData} = useContext(DataContext);

const amount = incomesData.length > 0 ? incomesData.find(income => income.jobID === id).amount : 0;


return (
    <>
    <div className="income-list__subcategory">
        <div className="income-list__subcategory--name">{job}</div>
        <div className="income-list__subcategory--sum"><span>{amount}</span> zł
        <button className="btn category_btn" style={{display: "inline"}}>+</button></div>
    </div>
    </>
)
}

export default Job;