export const createMember = (member, set) => {
    fetch("http://localhost:3005/members", {
        headers: {
            "Content-Type": "application/json"
        },
    method: "POST",
    body: JSON.stringify(member)
    })
    .then(r=>r.json())
    .then(data => {
        set(data)
      })
      .catch(error => {
        console.log(error);
      });
}
