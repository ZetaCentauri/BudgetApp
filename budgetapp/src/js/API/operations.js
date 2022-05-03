export const createOperation = (operation, set) => {
    fetch("http://localhost:3005/membersIncome", {
        headers: {
            "Content-Type": "application/json"
        },
    method: "POST",
    body: JSON.stringify(operation)
    })
    .then(r=>r.json())
    .then(data => {
        set(data)
      })
      .catch(error => {
        console.log(error);
      });
}
