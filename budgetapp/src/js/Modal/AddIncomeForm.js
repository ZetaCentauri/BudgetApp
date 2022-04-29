const AddIncomeForm = () => {

        

    return (
        <form className="add-member__form">
            <label>Członek rodziny</label>
            <input className="add-member__input" type="text"/>
            <label>Rodzaj przychodu, np. Praca</label>
            <input className="add-member__input" type="text"/>
            <label>Przychód</label>
            <input className="add-member__input" type="text"/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddIncomeForm;