const AddSubcategoryForm = () => {
        

    return (
        <form className="add-member__form">
            <label>Kategoria</label>
            <input className="add-member__input" type="text"/>
            <label>Podkategoria</label>
            <input className="add-member__input" type="text"/>
            <button className="btn add-member__btn" type="submit">Zapisz</button>
        </form>
    )
}

export default AddSubcategoryForm;