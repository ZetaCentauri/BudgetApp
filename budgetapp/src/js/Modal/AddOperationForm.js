import { useState, useContext } from "react";
import DataContext from "../DataContext/DataContext";
import { createOperation } from "../API/operations";

const AddOperationForm = () => {
        
    const { operationsData, setOperationsData } = useContext(DataContext);

    return (
        <form className="add-member__form">
            <label>Kategoria</label>
            <input className="add-member__input" type="text"/>
            <label>Podkategoria</label>
            <input className="add-member__input" type="text"/>
            <label>Data</label>
            <input className="add-member__input" type="date"/>
            <label>Opis</label>
            <input className="add-member__input" type="text"/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddOperationForm;