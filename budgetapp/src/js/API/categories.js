export const createCategory = (category) => {
    fetch("http://localhost:3005/categories", {
        headers: {
            "Content-Type": "application/json"
        },
    method: "POST",
    body: JSON.stringify(category)
    })
    .then(r=>r.json())
    .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
}
