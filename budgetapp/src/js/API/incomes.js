export const createMember = (incomes, memberID) => {
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
      })
      .catch(error => {
        console.log(error);
      });
}