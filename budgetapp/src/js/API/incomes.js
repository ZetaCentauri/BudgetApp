export const createIncome = (incomes, memberID, set) => {
    fetch(`http://localhost:3005/membersIncome/${memberID}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify(incomes)
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