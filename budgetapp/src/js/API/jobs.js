export const createJob = (job, memberID, set) => {
    fetch(`http://localhost:3005/members/${memberID}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify(job)
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