export const createOperation = (operation, set) => {
    fetch("http://localhost:3005/operations", {
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

export const deleteOperation = (id) => {
  fetch(`http://localhost:3005/operations/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      console.log(response.ok);
    })
    .catch(error => {
      console.log(error);
    });
}
