import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import DataContext from "../DataContext/DataContext";
import { useContext, useEffect, useState } from "react";

const Job = ({job, amount}) => {
   
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