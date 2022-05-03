export const createSubcategory = (subcategory, categoryID, set) => {
    fetch(`http://localhost:3005/categories/${categoryID}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify(subcategory)
        })
    .then(r=>r.json())
    .then(data => {
        console.log(data);
        set(data);
      })
      .catch(error => {
        console.log(error);
      });
}