export const createMember = (member) => {
    fetch("http://localhost:3005/membersIncome", {
        headers: {
            "Content-Type": "application/json"
        },
    method: "POST",
    body: JSON.stringify(member)
    })
    .then(r=>r.json())
    .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
}