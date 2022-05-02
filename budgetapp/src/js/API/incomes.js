export const createIncome = (incomes, memberID) => {
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



export const maxMemberID = () => {
  fetch(`http://localhost:3005/membersIncome:memberID`)
  .then(r=>r.json())
  .then(data => {
    console.log(data);
    return data.map(member=>member.memberID)
  })
  .catch(error => {
    console.log(error);
  })

}