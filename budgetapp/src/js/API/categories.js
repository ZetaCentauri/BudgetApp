export const createCategory = (category, set) => {
    fetch("http://localhost:3005/categories", {
        headers: {
            "Content-Type": "application/json"
        },
    method: "POST",
    body: JSON.stringify(category)
    })
    .then(r=>r.json())
    .then(data => {
        set(data);
      })
      .catch(error => {
        console.log(error);
      });
}
